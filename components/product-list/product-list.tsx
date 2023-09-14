'use client'

import { ProductsResponse } from '@/app/page'
import { ProductCard } from '../product-card'
import { Button } from '../ui/button/button'
import { ShoppingBag } from 'lucide-react'
import { SizeSelector } from '../size-selector/size-selector'
import { Pagination } from '../pagination/pagination'
import { useCartStore } from '../../store/cart'
import { Product } from '@/store/products'
import toast from 'react-hot-toast'
import { ProductsGrid } from './product-list.styled'

type Props = {
  data: ProductsResponse
}

export function ProductList({ data }: Props) {
  const addProductToCart = useCartStore((state) => state.addToCart)
  const handleAddToCart = (product: Product) => {
    addProductToCart(product, 1)
    toast.success('Product added to cart', {
      position: 'bottom-center'
    })
  }

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

              <Button onClick={() => handleAddToCart(product)}>
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
