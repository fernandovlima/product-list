'use client'

import { ProductsResponse } from '@/app/page'
import styled from 'styled-components'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button/button'
import { ShoppingBag } from 'lucide-react'
import { SizeSelector } from '@/components/size-selector/size-selector'
import { Pagination } from '@/components/pagination/pagination'

type Props = {
  data: ProductsResponse
}

export function ProductList({ data }: Props) {
  return (
    <>
      <ProductsGrid>
        {data.products.map((product) => (
          <ProductCard.Root key={product.id}>
            <ProductCard.Image imageUrl={product.imageUrl} />
            <ProductCard.Content>
              <ProductCard.Title>
                <h2>{product.name}</h2>
              </ProductCard.Title>
              <ProductCard.Price price={product.price} />

              <SizeSelector sizes={['PP', 'P', 'M', 'G']} />

              <Button>
                <ShoppingBag />
                Comprar
              </Button>
            </ProductCard.Content>
          </ProductCard.Root>
        ))}
      </ProductsGrid>
      <Pagination totalPages={data.totalPages} />
    </>
  )
}

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 24%));
  grid-gap: 1.6rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  justify-items: center;
  overflow-y: auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 40%));
    padding: 1.6rem;
  }

  @media (max-width: 528px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 80%));
  }
`
