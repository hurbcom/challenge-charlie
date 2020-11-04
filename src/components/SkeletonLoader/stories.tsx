import { Story, Meta } from '@storybook/react/types-6-0'
import SkeletonLoader from '.'

export default {
  title: 'SkeletonLoader',
  component: SkeletonLoader,
  args: {
    height: '2rem',
    width: '6rem'
  }
} as Meta

export const Default: Story = (args) => <SkeletonLoader {...args} />
