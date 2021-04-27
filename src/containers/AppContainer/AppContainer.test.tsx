import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import AppContainer from './index'
import {
  AppContainerMask,
  AppContainerTransition,
  AppContainerWallpaper,
  AppContainerWrapper,
} from './AppContainer.style'
import Input from '../../components/Input'

describe('AppContainer', () => {
  let appContainer: ShallowWrapper

  beforeEach(() => {
    appContainer = shallow(<AppContainer />)
  })

  it('when component is rendered', () => {
    const appContainerWallpaper = appContainer.find(AppContainerWallpaper)

    expect(appContainerWallpaper.length).toBe(1)
  })

  it('should contain AppContainerMask', () => {
    const appContainerMask = appContainer.find(AppContainerMask)

    expect(appContainerMask.length).toBe(1)
  })

  it('should contain AppContainerWrapper', () => {
    const appContainerWrapper = appContainer.find(AppContainerWrapper)

    expect(appContainerWrapper.length).toBe(1)
  })

  it('should contain Input', () => {
    const input = appContainer.find(Input)

    expect(input.length).toBe(1)
  })

  it('should contain AppContainerTransition', () => {
    const appContainerTransition = appContainer.find(AppContainerTransition)

    expect(appContainerTransition.length).toBe(1)
  })
})
