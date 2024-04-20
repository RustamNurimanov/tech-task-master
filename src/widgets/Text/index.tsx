import React from "react";

import { RotatingLines } from "react-loader-spinner";
import { StyledContainer } from "./styles";
import { theme } from "../../theme/theme";

export namespace TextTypes {
  export interface Props {
    children: React.ReactNode;
    variant?: "bold" | "regular";
    isLoading?: boolean;
  }
}
export const Text = React.forwardRef<HTMLDivElement, TextTypes.Props>(function Text(
  { children, variant, ...props },
  ref,
) {
  return (
    <StyledContainer ref={ref} $variant={variant} {...props}>
      {props.isLoading ? (
        <RotatingLines
          width="12"
          strokeWidth="5"
          strokeColor={theme.text.W100}
          animationDuration="0.75"
        />
      ) : (
        children
      )}
    </StyledContainer>
  );
});
