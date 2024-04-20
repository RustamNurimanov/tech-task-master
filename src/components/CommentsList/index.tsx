import { isEmpty, isNil } from "lodash";
import React from "react";

import { Comment, type CommentTypes } from "../Comment";
import { Flex } from "../../widgets/Flex";
import { type UseModelTypes } from "../../pages/comments/model";

type Props = {
  comments?: UseModelTypes.CommentEntity[];
} & Pick<CommentTypes.Props, "onLikeClick">;

//Если была бы большая вложенность, то надо бы выносить в контекст
export const CommentsList: React.FC<Props> = React.memo(function CommentsList(props) {
  if (isEmpty(props.comments) || isNil(props.comments)) {
    return null;
  }
  return (
    <Flex direction={"column"} gap={"32px"}>
      {props.comments.map(comment => (
        <Flex direction={"column"} gap={"32px"} key={comment.id}>
          <Comment comment={comment} onLikeClick={props.onLikeClick} />
          {!isEmpty(comment.subComments) && (
            <div style={{ marginLeft: 34 }}>
              <CommentsList comments={comment.subComments} onLikeClick={props.onLikeClick} />
            </div>
          )}
        </Flex>
      ))}
    </Flex>
  );
});
