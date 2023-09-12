'use client'

import Image from 'next/image'
import styled from 'styled-components'
import { ProductCardImageContainer } from '@/components/product-card/product-card-image.styled'

type Props = {
  imageUrl: string
}

export function ProductCardImage({ imageUrl }: Props) {
  return (
    <ProductCardImageContainer>
      <Image src={imageUrl} alt={`Product image`} fill />
    </ProductCardImageContainer>
  )
}
