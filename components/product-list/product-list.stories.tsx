import type { Meta, StoryObj } from '@storybook/react'
import { ProductList } from './product-list'
import { PRODUCTS } from '../../store/products'

const meta = {
  title: 'components/product-list',
  component: ProductList,
  parameters: {},
  tags: ['autodocs']
} satisfies Meta<typeof ProductList>

export default meta
type Story = StoryObj<typeof meta>

export const Products: Story = {
  args: {
    data: {
      products: PRODUCTS,
      totalPages: 1
    }
  },
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
}
