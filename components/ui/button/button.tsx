// src/components/Button.tsx

import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { StyledButton } from './button.styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <StyledButton {...props} ref={ref}>
      {children}
    </StyledButton>
  )
})

Button.displayName = 'Button'

export { Button }
