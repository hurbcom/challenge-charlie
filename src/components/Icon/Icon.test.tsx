import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { IconWrapper } from './Icon.style'
import Icon from './index'
import Clear from '../../assets/icons/Clear'
import Thunderstorm from '../../assets/icons/Thunderstorm'
import Clouds from '../../assets/icons/Clouds'
import Drizzle from '../../assets/icons/Drizzle'
import Rain from '../../assets/icons/Rain'
import Snow from '../../assets/icons/Snow'
import WeatherDefault from '../../assets/icons/WeatherDefault'
describe('Icon', () => {
  let icon: ShallowWrapper

  beforeEach(() => {
    icon = shallow(<Icon weather={'Clear'} />)
  })

  it('when component is rendered', () => {
    const iconWrapper = icon.find(IconWrapper)

    expect(iconWrapper.length).toBe(1)
  })

  it('should contain Clear Icon', () => {
    const clearIcon = icon.find(Clear)

    expect(clearIcon.length).toBe(1)
  })

  it('should contain Clouds Icon', () => {
    icon = shallow(<Icon weather={'Clouds'} />)
    const cloudsIcon = icon.find(Clouds)

    expect(cloudsIcon.length).toBe(1)
  })

  it('should contain Rain Icon', () => {
    icon = shallow(<Icon weather={'Rain'} />)
    const rainIcon = icon.find(Rain)

    expect(rainIcon.length).toBe(1)
  })

  it('should contain Drizzle Icon', () => {
    icon = shallow(<Icon weather={'Drizzle'} />)
    const drizzleIcon = icon.find(Drizzle)

    expect(drizzleIcon.length).toBe(1)
  })

  it('should contain Thunderstorm Icon', () => {
    icon = shallow(<Icon weather={'Thunderstorm'} />)
    const thunderstormIcon = icon.find(Thunderstorm)

    expect(thunderstormIcon.length).toBe(1)
  })

  it('should contain Snow Icon', () => {
    icon = shallow(<Icon weather={'Snow'} />)
    const snowIcon = icon.find(Snow)

    expect(snowIcon.length).toBe(1)
  })

  it('should contain Default Icon', () => {
    icon = shallow(<Icon weather={'Default'} />)
    const defaultIcon = icon.find(WeatherDefault)

    expect(defaultIcon.length).toBe(1)
  })
})
