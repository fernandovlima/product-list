'use client'

import { PaginationContainer } from '@/components/pagination/pagination.styled'
import { PaginationButton } from '@/components/pagination/pagination-button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {
  totalPages: number
}
export function Pagination({ totalPages }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentPage = searchParams.get('page') ?? 1

  const handleGoToPage = async (page: number) => {
    router.push(`?page=${page}`)
  }

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, index) => index + 1)?.map((page) => (
        <PaginationButton
          key={page}
          isActive={Number(currentPage) === page}
          page={page}
          onClick={() => handleGoToPage(page)}
        />
      ))}
    </PaginationContainer>
  )
}
