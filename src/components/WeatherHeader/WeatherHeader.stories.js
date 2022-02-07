import React from 'react'
import { WeatherHeader } from './'

export default {
  title: 'WeatherHeader',
  args: {
    cityName: 'Rio de Janeiro',
    stateName: 'Rio de Janeiro',
  },
}

const Template = (args) => <WeatherHeader {...args} />

export const Default = Template.bind({})
Default.storyName = 'Default'
