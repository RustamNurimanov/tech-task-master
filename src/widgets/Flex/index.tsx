import type { CSSProperties } from 'react'
import styled from 'styled-components'

interface FlexProps {
  direction?: CSSProperties['flexDirection']
  justify?: CSSProperties['justifyContent']
  align?: CSSProperties['alignItems']
  border?: string
  gap?: string
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
    gap: ${({ gap }) => gap};

`
