import type { Meta, StoryObj } from '@storybook/react'
import { SizeSelectorButton } from './size-selector-button'

const meta = {
  title: 'components/size-selector-button',
  component: SizeSelectorButton,
  parameters: {},
  tags: ['autodocs']
} satisfies Meta<typeof SizeSelectorButton>

export default meta
type Story = StoryObj<typeof meta>

export const unselected: Story = {
  args: {
    selected: false,
    children: 'P'
  }
}

export const selected: Story = {
  args: {
    selected: true,
    children: 'P'
  }
}
