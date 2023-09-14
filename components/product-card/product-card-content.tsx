import { ReactNode } from 'react'
import { ProductCardContentContainer } from './product-card-content.styled'

type Props = {
  children: ReactNode
}
export function ProductCardContent({ children }: Props) {
  return <ProductCardContentContainer>{children}</ProductCardContentContainer>
}
