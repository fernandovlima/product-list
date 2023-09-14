import type { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from './index'
import { SizeSelector } from '../size-selector/size-selector'
import { Button } from '../ui/button/button'
import { ShoppingBag } from 'lucide-react'

const meta = {
  title: 'components/product-card',
  render: () => (
    <ProductCard.Root>
      <ProductCard.Image imageUrl="https://res.cloudinary.com/dnro5pdpx/image/upload/v1694543120/products/product02.jpg" />
      <ProductCard.Content>
        <ProductCard.Title>
          <h2>Camisa Estampada Floral</h2>
        </ProductCard.Title>
        <ProductCard.Price price={229.9} />

        <SizeSelector sizes={['PP', 'P', 'M', 'G']} />

        <Button>
          <ShoppingBag />
          Comprar
        </Button>
      </ProductCard.Content>
    </ProductCard.Root>
  ),
  parameters: {},
  tags: ['autodocs']
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const Card: Story = {}
