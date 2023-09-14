import type { Meta, StoryObj } from '@storybook/react'
import { SizeSelector } from './size-selector'

const meta = {
  title: 'components/size-selector',
  component: SizeSelector,
  parameters: {
    controls: { expanded: true }
  },
  tags: ['autodocs']
} satisfies Meta<typeof SizeSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Sizes: Story = {
  args: {
    sizes: ['P', 'M', 'G', 'GG']
  }
}
