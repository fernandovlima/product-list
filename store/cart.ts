import { create } from 'zustand'
import { Product } from '@/store/products'

interface State {
  cart: Product[]
  totalItems: number
  totalPrice: number
}

interface Actions {
  addToCart: (Item: Product, qty: number) => void
}

// Initialize a default state
const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0
}

export const useCartStore = create<State & Actions>((set, get) => ({
  cart: INITIAL_STATE.cart,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,
  addToCart: (product: Product, qty: number) => {
    const cart = get().cart
    const cartItem = cart.find((item) => item.id === product.id)
    const totalQtyPrice = product.price * qty

    if (cartItem) {
      set((state) => ({
        totalItems: state.totalItems + qty,
        totalPrice: state.totalPrice + totalQtyPrice
      }))
    } else {
      const updatedCart = [...cart, { ...product }]

      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + qty,
        totalPrice: state.totalPrice + totalQtyPrice
      }))
    }
  }
}))
