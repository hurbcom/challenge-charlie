import React from 'react'
import { WeatherHeader } from './'

export default {
  title: 'WeatherHeader',
  args: {
    cityName: 'Rio de Janeiro',
    stateName: 'Rio de Janeiro',
  },
}

const Wrapper = ({ children }) => (
  <div style={{ maxWidth: 300 }}>{children}</div>
)
const Template = (args) => (
  <Wrapper>
    <WeatherHeader {...args} />
  </Wrapper>
)

export const Default = Template.bind({})
Default.storyName = 'Default'
