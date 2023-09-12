import { ButtonHTMLAttributes } from 'react'
import { PaginationButtonContainer } from '@/components/pagination/pagination-button.styled'

interface PaginationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCurrent: boolean
  page: number
}
export function PaginationButton({ isCurrent, page, ...props }: PaginationButtonProps) {
  return (
    <PaginationButtonContainer isCurrent={isCurrent} {...props}>
      {page}
    </PaginationButtonContainer>
  )
}
