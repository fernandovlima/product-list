import { ReactNode } from 'react'
import { ProductCardTitleContainer } from './product-card-title.styled'

type props = {
  children: ReactNode
}
export function ProductCardTitle({ children }: props) {
  return <ProductCardTitleContainer>{children}</ProductCardTitleContainer>
}
