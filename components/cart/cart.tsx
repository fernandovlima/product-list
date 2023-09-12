'use client'
import { useCartStore } from '@/store/cart'
import { ShoppingCart } from 'lucide-react'
import { CartButtonContainer, CartTotal, SubTotal, TotalItems } from '@/components/cart/cart.styled'

export function CartButton() {
  const totalItems = useCartStore((state) => state.totalItems)
  const totalPrice = useCartStore((state) => state.totalPrice)

  return (
    <CartButtonContainer>
      <CartTotal>
        <ShoppingCart name={'shopping-cart'} size={24} color={'#000'} />
        <TotalItems>{totalItems}</TotalItems>
      </CartTotal>
      <SubTotal>{`${totalPrice.toFixed(2)}`}</SubTotal>
    </CartButtonContainer>
  )
}
