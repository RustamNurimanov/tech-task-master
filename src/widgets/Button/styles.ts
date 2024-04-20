import styled, { css } from "styled-components";

import { type ButtonTypes } from "./index";

interface Props {
  $variant?: ButtonTypes.ButtonProps["variant"];
  $color?: ButtonTypes.ButtonProps["color"];
  $size?: ButtonTypes.ButtonProps["size"];
}

const solidColorStyles: Record<
  NonNullable<ButtonTypes.ButtonProps["color"]>,
  ReturnType<typeof css>
> = {
  gray: css`
    color: ${({ theme }) => theme.text.W100};
    background: ${({ theme }) => theme.background.G80};
    &:hover {
      background: ${({ theme }) => theme.background.G100};
    }
  `,
};

const sizeStyles: Record<NonNullable<ButtonTypes.ButtonProps["size"]>, ReturnType<typeof css>> = {
  small: css`
    padding: 8px 32px;
    height: 36px;
    max-width: 234px;
  `,
};
const variantMap: Record<
  NonNullable<ButtonTypes.ButtonProps["variant"]>,
  typeof solidColorStyles
> = {
  default: solidColorStyles,
};

export const StyledButton = styled.button<Props>`
  cursor: pointer;
  text-decoration: none;
  font-style: normal;
  border: none;
  border-radius: 4px;
  transition: all 0.2s;
  background: none;
  width: 100%;

  ${({ $size = "small" }) => sizeStyles[$size]};
  ${({ $variant = "default", $color = "gray" }) => variantMap[$variant][$color]};
  &:focus {
    outline: none;
  }
`;
