import { type UseCommentsListTypes, useCommentsList } from "shared/api/comments/list";
import { isNil } from "lodash";
import { useAuthorList, type useAuthorListTypes } from "shared/api/author/list";
import { useMemo } from "react";

import { usePatchComment } from "./api/usePatchComment";

export namespace UseModelTypes {
  export type CommentWithAuthor = Omit<UseCommentsListTypes.Entity, "author"> & {
    author: useAuthorListTypes.Entity | null;
  };
  export type CommentEntity = CommentWithAuthor & {
    subComments: CommentEntity[];
  };
}

export const useModel = () => {
  const {
    data: comments,
    isLoading: isCommentsLoading,
    fetchNextPage: commentsFetchNextPage,
    hasNextPage: commentsHasNextPage,
    queryKey: commentsQueryKey,
    isFetchingNextPage,
  } = useCommentsList();
  const { data: authors, isLoading: isAuthorsLoading } = useAuthorList();
  const { onPatchComment } = usePatchComment(commentsQueryKey);

  //FIXME мы не должны джоинить автора и сабкоменты на фронте это логика бека
  const commentsWithAuthor = useMemo<UseModelTypes.CommentWithAuthor[]>(() => {
    const authorMap = new Map(authors?.map(author => [author.id, author]));
    return comments.map(comment => ({
      ...comment,
      author: authorMap.get(comment.author) ?? null,
    }));
  }, [comments, authors]);

  //FIXME Вся логика мапинга должна быть на беке =)
  const joinedComments = useMemo<UseModelTypes.CommentEntity[]>(() => {
    const commentsByParentId = commentsWithAuthor.reduce<
      Record<string, UseModelTypes.CommentEntity[]>
    >((acc, comment) => {
      if (isNil(comment.parent)) {
        return acc;
      }
      const commentWithSubComments = {
        ...comment,
        subComments: [],
      } satisfies UseModelTypes.CommentEntity;

      if (comment.parent in acc) {
        const comments = acc[comment.parent];
        acc[comment.parent] = [...comments, commentWithSubComments];
        return acc;
      }

      acc[comment.parent] = [commentWithSubComments];
      return acc;
    }, {});

    const mapper = (comment: UseModelTypes.CommentWithAuthor): UseModelTypes.CommentEntity => ({
      ...comment,
      //Сорт от новым к старым
      // subComments: orderBy(commentsByParentId[comment.id]?.map(mapper) ?? [], "created", "desc"),
      subComments: commentsByParentId[comment.id]?.map(mapper) ?? [],
      //FIXME этих данных даже в модели нет!!
      isLiked: comment.isLiked ?? false,
    });

    //FIXME сортировка на беке должна происходить
    return commentsWithAuthor.filter(comment => isNil(comment.parent)).map(mapper);
  }, [commentsWithAuthor]);

  //FIXME каунтреты нельзя считать на фронте нужно ручки на беке и уже локально обновлять кеш на мутациях
  const totalLikesCount = useMemo(
    () => comments.reduce((acc, comment) => acc + comment.likes, 0),
    [comments],
  );
  const totalCommentsCount = useMemo(() => comments.length, [comments]);

  return {
    onPatchComment,
    totalLikesCount,
    totalCommentsCount,
    comments: joinedComments,
    authors,
    commentsFetchNextPage,
    commentsHasNextPage,
    isLoading: isCommentsLoading || isAuthorsLoading,
    isFetchingNextPage,
  };
};
