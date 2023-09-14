import { Price, ProductCardPriceContainer, SplitPrice } from './product-card-price.styled'

type Props = {
  price: number
}

export function ProductCardPrice({ price }: Props) {
  const splitPrice = price / 10
  return (
    <ProductCardPriceContainer>
      <Price>{`R$ ${price.toFixed(2)}`}</Price>
      <SplitPrice>{`ou 10x de ${splitPrice.toFixed(2)}`}</SplitPrice>
    </ProductCardPriceContainer>
  )
}
