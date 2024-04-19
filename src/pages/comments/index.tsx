import { CommentsList } from '../../components/CommentsList'
import { type UseCommentsListTypes } from '../../shared/api/comments/list'
import { Button } from '../../widgets/Button'
import { Flex } from '../../widgets/Flex'

import { useModel } from './model'

export const Comments = () => {
  const { comments, commentsHasNextPage, commentsFetchNextPage } = useModel()

  return (
    <Flex direction={'column'} gap={'32px'}>
      <CommentsList comments={comments as UseCommentsListTypes.Entity[]}/>
      {commentsHasNextPage && <Button onClick={async () => await commentsFetchNextPage()}>Загрузить еще</Button>}
    </Flex>
  )
}
