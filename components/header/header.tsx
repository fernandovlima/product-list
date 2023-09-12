import { HeaderContainer } from '@/components/header/header.styled'
import { CartButton } from '@/components/cart/cart'

export function Header() {
  return (
    <HeaderContainer>
      <h3>My Store</h3>
      <CartButton />
    </HeaderContainer>
  )
}
