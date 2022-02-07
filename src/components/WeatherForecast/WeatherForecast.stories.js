import React from 'react'
import { WeatherForecast } from './'

export default {
  title: 'WeatherForecast',
  args: {
    cityName: 'Rio de Janeiro',
    stateName: 'Rio de Janeiro',
  },
}

const Template = (args) => <WeatherForecast {...args} />

export const Default = Template.bind({})
Default.storyName = 'Default'
Default.args = {
  today: {
    temperature: 25,
    dayFeeling: 'Ensolarado',
    windDirection: 'NO',
    windSpeed: '25km/h',
    airHumidity: '30%',
    airPressure: '10kpmhg',
  },
  tomorrow: {
    temperature: 30,
  },
  afterTomorrow: {
    temperature: 22,
  },
}

export const HotDay = Template.bind({})
HotDay.storyName = 'Hot days'
HotDay.args = {
  today: {
    ...Default.args.today,
    temperature: 38,
  },
  tomorrow: {
    ...Default.args.tomorrow,
    temperature: 40,
  },
  afterTomorrow: {
    ...Default.args.afterTomorrow,
    temperature: 39,
  },
}

export const ColdDay = Template.bind({})
ColdDay.storyName = 'Cold days'
ColdDay.args = {
  today: {
    ...Default.args.today,
    temperature: 14,
  },
  tomorrow: {
    ...Default.args.tomorrow,
    temperature: 11,
  },
  afterTomorrow: {
    ...Default.args.afterTomorrow,
    temperature: 12,
  },
}
