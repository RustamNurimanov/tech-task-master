import Media from "../../responsive/Media";
import styled from "styled-components";

export const StyledHeader = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.border.G100};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
  ${Media.mobile} {
    margin-bottom: 24px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 562px;
  width: 100%;
  padding: 52px 0 64px;
  margin: 0 20px;
`;
