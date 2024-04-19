import React from 'react'
import { type UseCommentsListTypes } from 'shared/api/comments/list'
import { Avatar } from 'widgets/Avatar'
import { Flex } from 'widgets/Flex'
import { Grid } from 'widgets/Grid'
import { SubText } from 'widgets/SubText'
import { Text } from 'widgets/Text'

interface Props {
  comment: UseCommentsListTypes.Entity
}
export const Comment: React.FC<Props> = (props) => {
  return (
    <Grid columns={'68px 1fr'} gap={'20px'}>
      <Avatar/>
      <Flex direction={'column'} gap={'12.5px'}>
        <Grid columns={'1fr auto'} gap={'12px'}>
          <Flex direction={'column'} gap={'4'}>
            <Text>d</Text>
            <SubText>{props.comment.created}</SubText>
          </Flex>
        </Grid>
        <Text>{props.comment.text}</Text>
      </Flex>
    </Grid>
  )
}
