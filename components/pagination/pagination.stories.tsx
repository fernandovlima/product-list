import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './pagination'

const meta = {
  title: 'components/pagination',
  parameters: {},
  component: Pagination,
  tags: ['autodocs']
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {
  parameters: {
    nextjs: {
      appDirectory: true
    }
  },
  args: {
    totalPages: 10
  }
}
