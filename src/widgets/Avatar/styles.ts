import styled from 'styled-components'

interface AbbreviationProps {
  $avatarTextSize: number
  $size: number
}
export const StyledAbbreviation = styled.span<AbbreviationProps>`
  font-size: ${({ $avatarTextSize }) => `${$avatarTextSize}px`};
  min-height: ${({ $size }) => `${$size}px`};
  min-width: ${({ $size }) => `${$size}px`};
    border-radius: 100%;
`

interface AvtarProps {
  $size: number
}
export const StyledAvatar = styled.img<AvtarProps>`
    object-fit: cover;
  min-height: ${({ $size }) => `${$size}px`};
  min-width: ${({ $size }) => `${$size}px`};
    border-radius: 100%;
`
