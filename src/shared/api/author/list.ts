import getCommentsRequest from '../../../api/comments/getCommentsRequest'
import { useLoadItems } from '../../../hooks/useLoadItems'

export namespace useAuthorListTypes {
  //Подобные модели должны браться из код гена, а не создаваться руками)
  export interface Entity {
    id: number
    name: string
    avatar: string | null
  }
}

export const useAuthorList = () => {
  return useLoadItems({
    fetchFn: getCommentsRequest,
    queryKey: ['comments']
  })
}
