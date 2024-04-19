import React from 'react'

import { StyledButton } from './styles'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  size?: 'small'
  variant?: 'default'
  color?: 'gray'
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button ({ children, ...props }, ref) {
    return (
      <StyledButton ref={ref}>
        {children}
      </StyledButton>
    )
  }
)
