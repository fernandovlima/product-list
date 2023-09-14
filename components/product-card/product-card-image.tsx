import Image from 'next/image'
import { ProductCardImageContainer } from './product-card-image.styled'

type Props = {
  imageUrl: string
}

export function ProductCardImage({ imageUrl }: Props) {
  return (
    <ProductCardImageContainer>
      <Image src={imageUrl} alt={`Product image`} fill blurDataURL={imageUrl} priority />
    </ProductCardImageContainer>
  )
}
