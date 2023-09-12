import { ReactNode } from 'react'
import { ProductCardTitleContainer } from '@/components/product-card/product-card-title.styled'

type props = {
  children: ReactNode
}
export function ProductCardTitle({ children }: props) {
  return <ProductCardTitleContainer>{children}</ProductCardTitleContainer>
}
