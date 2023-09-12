import { ButtonHTMLAttributes } from 'react'
import { PaginationButtonContainer } from '@/components/pagination/pagination-button.styled'

interface PaginationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean
  page: number
}
export function PaginationButton({ isActive, page, ...props }: PaginationButtonProps) {
  return (
    <PaginationButtonContainer isActive={isActive} {...props}>
      {page}
    </PaginationButtonContainer>
  )
}
