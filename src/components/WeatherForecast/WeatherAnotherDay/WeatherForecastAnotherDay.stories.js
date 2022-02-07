import React from 'react'
import { WeatherForecastAnotherDay } from '.'

export default {
  title: 'WeatherForecastAnotherDay',
  args: {
    dayLabel: 'Amanhã',
    temperature: 30,
    lightnessLevel: 1,
  },
}

const Template = (args) => <WeatherForecastAnotherDay {...args} />

export const Default = Template.bind({})
Default.storyName = 'Default'

export const HotDay = Template.bind({})
HotDay.storyName = 'Hot day'
HotDay.args = {
  temperature: 37,
}

export const ColdDay = Template.bind({})
ColdDay.storyName = 'Cold day'
ColdDay.args = {
  temperature: 10,
}
