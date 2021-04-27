import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import dataContextMock from '../../common/mocks/dataContextMock'
import Today from './index'
import { TodayDetails, TodayDetailsWeather, TodayDetailsWeatherItem, TodayWeather, TodayWrapper } from './Today.style'
import Icon from '../Icon'
import { Title } from '../UI/Title'
describe('Today', () => {
  let today: ShallowWrapper
  const contextTodayMock = dataContextMock.weatherPerDay[0]

  beforeEach(() => {
    today = shallow(<Today contextToday={contextTodayMock} />)
  })

  it('when component is rendered', () => {
    const todayWrapper = today.find(TodayWrapper)

    expect(todayWrapper.length).toBe(1)
  })

  it('should contain TodayWrapperIcon', () => {
    const todayWrapper = today.find(TodayWrapper)

    expect(todayWrapper.length).toBe(1)
  })

  it('should contain Icon', () => {
    const icon = today.find(Icon)

    expect(icon.length).toBe(1)
  })
  it('should contain TodayDetails', () => {
    const todayDetails = today.find(TodayDetails)

    expect(todayDetails.length).toBe(1)
  })

  it('should contain Title', () => {
    const title = today.find(Title)

    expect(title.length).toBe(2)
  })

  it('should contain TodayWeather', () => {
    const todayWeather = today.find(TodayWeather)

    expect(todayWeather.length).toBe(1)
  })

  it('should contain TodayDetailsWeather', () => {
    const todayDetailsWeather = today.find(TodayDetailsWeather)

    expect(todayDetailsWeather.length).toBe(1)
  })

  it('should contain TodayDetailsWeatherItem', () => {
    const todayDetailsWeatherItem = today.find(TodayDetailsWeatherItem)

    expect(todayDetailsWeatherItem.length).toBe(3)
  })
})
