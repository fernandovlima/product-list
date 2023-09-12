import { ReactNode } from 'react'
import { ProductCardContentContainer } from '@/components/product-card/product-card-content.styled'

type Props = {
  children: ReactNode
}
export function ProductCardContent({ children }: Props) {
  return <ProductCardContentContainer>{children}</ProductCardContentContainer>
}
