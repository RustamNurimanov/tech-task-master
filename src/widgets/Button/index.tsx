import React from "react";

import { StyledButton } from "./styles";

export namespace ButtonTypes {
  export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
    size?: "small";
    variant?: "default";
    color?: "gray";
    children: React.ReactNode;
  }
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonTypes.ButtonProps>(function Button(
  { children, size, color, variant, ...props },
  ref,
) {
  return (
    <StyledButton ref={ref} $size={size} $variant={variant} $color={color} {...props}>
      {children}
    </StyledButton>
  );
});
