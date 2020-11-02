import { Story, Meta } from '@storybook/react/types-6-0'
import SearchBar from '.'

export default {
  title: 'SearchBar',
  component: SearchBar,
  args: {
    title: 'Hello Hurb'
  }
} as Meta

export const Default: Story = (args) => <SearchBar {...args} />
