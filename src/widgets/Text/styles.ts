import styled from "styled-components";

import { type TextTypes } from "./index";

const weightMap: Record<NonNullable<TextTypes.Props["variant"]>, number> = {
  bold: 600,
  regular: 400,
};

interface Props {
  $variant?: TextTypes.Props["variant"];
}
export const StyledContainer = styled.div<Props>`
  overflow-wrap: anywhere;
  font-weight: ${({ $variant = "regular" }) => weightMap[$variant]};
`;
