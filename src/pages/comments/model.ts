import { useAuthorList } from '../../shared/api/author/list'
import { useCommentsList } from '../../shared/api/comments/list'

export const useModel = () => {
  const { data: comments, isLoading: isCommentsLoading, isLoadingError: isCommentsError, fetchNextPage: commentsFetchNextPage, hasNextPage: commentsHasNextPage } = useCommentsList()
  const { data: authors, isLoading: isAuthorsLoading, isLoadingError: isAuthorsError } = useAuthorList()
  console.log(comments, isCommentsLoading, isCommentsError)
  console.log(authors, isAuthorsLoading, isAuthorsError)

  return { comments, isCommentsLoading, isCommentsError, authors, isAuthorsLoading, isAuthorsError, commentsFetchNextPage, commentsHasNextPage }
}
