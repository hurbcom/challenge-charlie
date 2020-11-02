import { Story, Meta } from '@storybook/react/types-6-0'
import WeatherCard from '.'

export default {
  title: 'WeatherCard',
  component: WeatherCard
} as Meta

export const Default: Story = () => (
  <WeatherCard position={{ permission: true, latitude: 123, longitude: 123 }} />
)
