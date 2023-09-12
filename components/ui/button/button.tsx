// src/components/Button.tsx

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { StyledButton } from '@/components/ui/button/buton.styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>
}
