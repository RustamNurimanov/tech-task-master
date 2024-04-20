import { Avatar } from "widgets/Avatar";
import { Flex } from "widgets/Flex";
import { Grid } from "widgets/Grid";
import { SubText } from "widgets/SubText";
import { Text } from "widgets/Text";
import { differenceInDays, format, formatDuration, intervalToDuration } from "date-fns";
import { ru } from "date-fns/locale";
import React, { useMemo } from "react";
import type { UseModelTypes } from "pages/comments/model";

import { Icons } from "../../assets/icons";
import { dateConstants } from "../../constants/date";
import type { UsePatchCommentTypes } from "../../pages/comments/api/usePatchComment";

import { StyledContainer } from "./styles";
import { useIsDesktop } from "../../responsive";

export namespace CommentTypes {
  export interface Props {
    comment: UseModelTypes.CommentEntity;
    onLikeClick: (args: Pick<UsePatchCommentTypes.onPatchCommentArgs, "id" | "isLiked">) => void;
  }
}

export const Comment: React.FC<CommentTypes.Props> = React.memo(function Comment(props) {
  const isDesktop = useIsDesktop();
  const formattedCreatedDate = useMemo(() => {
    const date = new Date(props.comment.created);
    const today = new Date();
    if (differenceInDays(today, date) < 1) {
      const duration = formatDuration(
        intervalToDuration({
          end: new Date(),
          start: new Date(props.comment.created),
        }),
        { locale: ru },
      );
      return `${duration} назад`;
    }
    return format(date, dateConstants.fullDate);
  }, [props.comment.created]);

  return (
    <Grid columns={`${isDesktop ? 68 : 40}px 1fr`} gap={"20px"}>
      <Avatar
        avatar={props.comment.author?.avatar}
        size={isDesktop ? 68 : 40}
        label={props.comment.author?.name}
      />
      <Flex direction={"column"} gap={"12.5px"}>
        <Grid columns={"1fr auto"} gap={"12px"}>
          <Flex direction={"column"} gap={"4px"}>
            <Text variant={"bold"}>{props.comment.author?.name}</Text>
            <SubText>{formattedCreatedDate}</SubText>
          </Flex>
          <StyledContainer
            align={"center"}
            gap={"8px"}
            onClick={() => {
              props.onLikeClick({ id: props.comment.id, isLiked: !props.comment.isLiked });
            }}
          >
            {props.comment.isLiked ? <Icons.FullRedHeart /> : <Icons.HollowRedHeart />}
            <Text variant={"bold"}>{props.comment.likes}</Text>
          </StyledContainer>
        </Grid>
        <Text>{props.comment.text}</Text>
      </Flex>
    </Grid>
  );
});
