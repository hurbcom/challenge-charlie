import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import dataContextMock from '../../common/mocks/dataContextMock'
import Input from '.'
import LocalIcon from '../../assets/icons/LocalIcon'
import Search from '../../assets/icons/Search'
import { InputWrapper, InputItem, InputIconClick } from './Input.style'

describe('Input', () => {
  let input: ShallowWrapper
  const nameInputMock = dataContextMock.info.name
  const handleClickMock = jest.fn()
  const handleChangeMock = jest.fn()

  beforeEach(() => {
    input = shallow(<Input nameInput={nameInputMock} handleClick={handleClickMock} handleChange={handleChangeMock} />)
  })

  it('when component is rendered', () => {
    const inputWrapper = input.find(InputWrapper)

    expect(inputWrapper.length).toBe(1)
  })

  it('should contain LocalIcon', () => {
    const localIcon = input.find(LocalIcon)

    expect(localIcon.length).toBe(1)
  })

  it('should contain InputItem', () => {
    const inputItem = input.find(InputItem)

    expect(inputItem.length).toBe(1)
  })

  it('should contain InputIconClick', () => {
    const inputIconClick = input.find(InputIconClick)

    expect(inputIconClick.length).toBe(1)
  })

  it('should contain Search', () => {
    const search = input.find(Search)

    expect(search.length).toBe(1)
  })
})
