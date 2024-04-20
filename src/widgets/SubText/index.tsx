import React from "react";

import { StyledContainer } from "./styles";

interface Props {
  children: React.ReactNode;
}
export const SubText = React.forwardRef<HTMLDivElement, Props>(function SubText(
  { children, ...props },
  ref,
) {
  return (
    <StyledContainer ref={ref} {...props}>
      {children}
    </StyledContainer>
  );
});
