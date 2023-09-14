import { ButtonHTMLAttributes, ReactNode } from 'react'
import { SelectSizeButton } from './size-selector-button.styled'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean
  children: ReactNode
}
export function SizeSelectorButton({ selected, children, ...props }: Props) {
  return (
    <SelectSizeButton selected={selected} {...props}>
      {children}
    </SelectSizeButton>
  )
}
