import { Button } from "widgets/Button";
import { Flex } from "widgets/Flex";
import { Icons } from "assets/icons";
import { InfinitySpin } from "react-loader-spinner";
import { Text } from "widgets/Text";
import { textFormsConstants } from "constants/textForms";
import { theme } from "theme/theme";
import { utils } from "utils";
import styled from "styled-components";

import { CommentsList } from "components/CommentsList";

import { StyledContainer, StyledHeader } from "./styles";
import { useModel } from "./model";

export const Comments = () => {
  const {
    comments,
    onPatchComment,
    commentsHasNextPage,
    commentsFetchNextPage,
    totalLikesCount,
    totalCommentsCount,
    isLoading,
    isFetchingNextPage,
  } = useModel();
  return (
    <StyledContainer>
      <StyledHeader>
        <Text variant={"bold"} isLoading={isLoading}>
          {totalCommentsCount}{" "}
          {utils.string.getTextFormForCount(totalCommentsCount, textFormsConstants.comments)}
        </Text>
        <Flex align={"center"} gap={"8px"}>
          <Icons.HollowHeart />
          <Text isLoading={isLoading}>{totalLikesCount}</Text>
        </Flex>
      </StyledHeader>
      <CommentsList comments={comments} onLikeClick={onPatchComment} />
      {(isLoading || isFetchingNextPage) && (
        <Flex justify={"center"}>
          <InfinitySpin width="200" color={theme.text.W100} />
        </Flex>
      )}
      {commentsHasNextPage && !isLoading && !isFetchingNextPage && (
        <StyledButton onClick={() => commentsFetchNextPage()}>Загрузить еще</StyledButton>
      )}
    </StyledContainer>
  );
};
const StyledButton = styled(Button)`
  margin: 60px auto 0;
`;
