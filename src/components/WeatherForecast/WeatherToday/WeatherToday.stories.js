import React from 'react'
import { WeatherToday } from '.'

export default {
  title: 'WeatherToday',
  args: {
    backgroundColor: 'gray',
    temperature: 16,
    dayFeeling: 'Mormaço',
    windDirection: 'NO',
    windSpeed: '79km/h',
    airHumidity: '78%',
    airPressure: '1003hPA',
  },
}

const Template = (args) => <WeatherToday {...args} />

export const Default = Template.bind({})
Default.storyName = 'Default'

export const HotDay = Template.bind({})
HotDay.storyName = 'Hot day'
HotDay.args = {
  temperature: 37,
  dayFeeling: 'Ensolarado',
}

export const ColdDay = Template.bind({})
ColdDay.storyName = 'Cold day'
ColdDay.args = {
  temperature: 10,
  dayFeeling: 'Nublado',
}
