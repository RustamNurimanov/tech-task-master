import styled from "styled-components";

interface AbbreviationProps {
  $avatarTextSize: number;
  $size: number;
}
export const StyledAbbreviation = styled.span<AbbreviationProps>`
  font-size: ${({ $avatarTextSize }) => `${$avatarTextSize}px`};
  height: ${({ $size }) => `${$size}px`};
  width: ${({ $size }) => `${$size}px`};
  background-color: ${({ theme }) => theme.background.B100};
  border-radius: 100%;
`;

interface AvtarProps {
  $size: number;
}
export const StyledAvatar = styled.img<AvtarProps>`
  object-fit: cover;
  height: ${({ $size }) => `${$size}px`};
  width: ${({ $size }) => `${$size}px`};
  border-radius: 100%;
`;
