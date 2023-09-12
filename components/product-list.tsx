'use client'

import { ProductsResponse } from '@/app/page'
import styled from 'styled-components'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button/button'
import { ShoppingBag } from 'lucide-react'

type Props = {
  data: ProductsResponse
}

export function ProductList({ data }: Props) {
  return (
    <ProductsGrid>
      {data.products.map((product) => (
        <ProductCard.Root key={product.id}>
          <ProductCard.Image imageUrl={product.imageUrl} />
          <ProductCard.Content>
            <ProductCard.Title>
              <h2>{product.name}</h2>
            </ProductCard.Title>
            <ProductCard.Price price={product.price} />
            <Button>
              <ShoppingBag />
              Comprar
            </Button>
          </ProductCard.Content>
        </ProductCard.Root>
      ))}
    </ProductsGrid>
  )
}

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 22.5%));
  grid-gap: 1.6rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 40%));
    padding: 1.6rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 100%));
  }
`
