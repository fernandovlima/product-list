import type { Meta, StoryObj } from '@storybook/react'
import { PaginationButton } from './pagination-button'

const meta = {
  title: 'components/pagination-button',
  component: PaginationButton,
  parameters: {},
  tags: ['autodocs']
} satisfies Meta<typeof PaginationButton>

export default meta
type Story = StoryObj<typeof meta>

export const NotCurrentPage: Story = {
  args: {
    isCurrent: false,
    page: 1
  }
}

export const CurrentPage: Story = {
  args: {
    isCurrent: true,
    page: 1
  }
}
