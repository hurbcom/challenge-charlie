import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import dataContextMock from '../../common/mocks/dataContextMock'
import OtherDays from '.'
import { OtherDaysDetails, OtherDaysWrapper, OtherDaysWrapperIcon } from './OtherDays.style'
import Icon from '../Icon'
import { Title } from '../UI/Title'
describe('OtherDays', () => {
  let otherdays: ShallowWrapper
  const contextOtherDaysMock = dataContextMock.weatherPerDay[1]

  beforeEach(() => {
    otherdays = shallow(<OtherDays day={1} contextOtherDays={contextOtherDaysMock} />)
  })

  it('when component is rendered', () => {
    const otherDaysWrapper = otherdays.find(OtherDaysWrapper)

    expect(otherDaysWrapper.length).toBe(1)
  })

  it('should contain OtherDaysWrapperIcon', () => {
    const otherDaysWrapperIcon = otherdays.find(OtherDaysWrapperIcon)

    expect(otherDaysWrapperIcon.length).toBe(1)
  })

  it('should contain Icon', () => {
    const icon = otherdays.find(Icon)

    expect(icon.length).toBe(1)
  })

  it('should contain OtherDaysDetails', () => {
    const otherDaysDetails = otherdays.find(OtherDaysDetails)

    expect(otherDaysDetails.length).toBe(1)
  })

  it('should contain Title', () => {
    const title = otherdays.find(Title)

    expect(title.length).toBe(2)
  })
})
