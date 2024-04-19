import React from 'react'

import { type UseCommentsListTypes } from '../../shared/api/comments/list'
import { Flex } from '../../widgets/Flex'
import { Comment } from '../Comment'

interface Props {
  comments?: UseCommentsListTypes.Entity[]
}
export const CommentsList: React.FC<Props> = (props) => {
  return (
    <Flex direction={'column'} gap={'32px'}>
      {props.comments?.map((comment) => (
        <Comment comment={comment} key={comment.id}/>
      ))}
    </Flex>
  )
}
