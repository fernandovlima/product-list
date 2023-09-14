// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'
import { ShoppingBasket } from 'lucide-react'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'ui/button',
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Button>

export const Main: Story = {
  args: {
    children: 'Comprar'
  }
}

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <ShoppingBasket style={{ height: '1.4rem', width: '1.4rem' }} />
      Comprar
    </Button>
  )
}
