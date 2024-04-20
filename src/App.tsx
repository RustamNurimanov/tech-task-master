import { Comments } from "pages/comments";
import styled from "styled-components";

import forest from "./assets/background/forest.png";
export const App = () => {
  return (
    <StyledBackground>
      <Comments />
    </StyledBackground>
  );
};
const StyledBackground = styled.main`
  display: flex;
  justify-content: center;
  background-image: url(${forest});
  background-color: ${({ theme }) => theme.background.B100};
  height: fit-content;
  min-height: 100dvh;
  width: 100dvw;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
