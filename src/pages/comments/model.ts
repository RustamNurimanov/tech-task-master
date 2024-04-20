import { type UseCommentsListTypes, useCommentsList } from "shared/api/comments/list";
import { isNil, orderBy } from "lodash";
import { useAuthorList, type useAuthorListTypes } from "shared/api/author/list";
import { useMemo } from "react";

import { usePatchComment } from "./api/usePatchComment";

export namespace UseModelTypes {
  export type CommentWithAuthor = Omit<UseCommentsListTypes.Entity, "author"> & {
    author: useAuthorListTypes.Entity;
  };
  export type CommentEntity = CommentWithAuthor & {
    subComments: CommentEntity[];
    isLiked: boolean;
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

  //FIXME каунтреты отдельно с бека должны запрашиваться
  const totalLikesCount = useMemo(() => {
    return comments.reduce((acc, comment) => acc + comment.likes, 0);
  }, [comments]);

  const totalCommentsCount = useMemo(() => {
    return comments.length;
  }, [comments]);

  //FIXME мы не должны джоинить автора и сабкоменты на фронте это логика бека
  const authorById = useMemo(() => {
    return new Map(authors?.map(author => [author.id, author]));
  }, [authors]);

  const commentsWithAuthor = useMemo<UseModelTypes.CommentWithAuthor[]>(() => {
    return comments.map(comment => ({ ...comment, author: authorById.get(comment.author)! }));
  }, [comments, authorById]);

  const commentsByParentId = useMemo(() => {
    return commentsWithAuthor.reduce<Record<string, UseModelTypes.CommentWithAuthor[]>>(
      (acc, comment) => {
        if (isNil(comment.parent)) return acc;

        if (comment.parent in acc) {
          const comments = acc[comment.parent];
          acc[String(comment.parent)] = [...comments, comment];
        } else {
          acc[String(comment.parent)] = [comment];
        }
        return acc;
      },
      {},
    );
  }, [commentsWithAuthor]);

  //FIXME сортировка на беке должна происходить
  const sortedComments = useMemo<UseModelTypes.CommentEntity[]>(() => {
    return orderBy(
      commentsWithAuthor.filter(comment => isNil(comment.parent)),
      "created",
      "desc",
    ).map<UseModelTypes.CommentEntity>(comment => {
      if (comment.id in commentsByParentId) {
        const subComments = orderBy(commentsByParentId[comment.id], "created", "desc");
        return {
          ...comment,
          subComments: subComments.map(comment => ({ ...comment, subComments: [] })),
        };
      }
      return { ...comment, subComments: [] };
    });
  }, [commentsByParentId, commentsWithAuthor]);

  return {
    onPatchComment,
    totalLikesCount,
    totalCommentsCount,
    comments: sortedComments,
    authors,

    commentsFetchNextPage,
    commentsHasNextPage,
    isLoading: isCommentsLoading || isAuthorsLoading,
    isFetchingNextPage,
  };
};
