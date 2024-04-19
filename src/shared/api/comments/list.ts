import getCommentsRequest from '../../../api/comments/getCommentsRequest'
import { useLoadItems } from '../../../hooks/useLoadItems'

export namespace UseCommentsListTypes {
  //Подобные модели должны браться из код гена, а не создаваться руками)
  export interface Entity {
    id: number
    created: string
    text: string
    author: number
    parent: null | Entity
    likes: number
  }
}

export const useCommentsList = () => {
  return useLoadItems({
    fetchFn: getCommentsRequest,
    queryKey: ['comments']
  })
}
