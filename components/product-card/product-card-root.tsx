import { ReactNode } from 'react'
import { Container } from '@/components/product-card/product-card-root.styled'

type Props = {
  children: ReactNode
}
export function ProductCardRoot({ children }: Props) {
  return <Container>{children}</Container>
}
