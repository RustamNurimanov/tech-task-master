import styled from "styled-components";
import type { CSSProperties } from "react";

interface GridProps {
  columns?: string;
  rows?: string;
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  border?: string;
  gap?: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  grid-template-rows: ${({ rows }) => rows};
  grid-template-rows: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  justify-content: ${({ align }) => align};
  gap: ${({ gap }) => gap};
`;
