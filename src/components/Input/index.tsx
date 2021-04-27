import React from 'react'
import { InputWrapper, InputItem, InputIconClick } from './Input.style'
import LocalIcon from '../../assets/icons/LocalIcon'
import Search from '../../assets/icons/Search'

type Props = {
  nameInput: string
  handleClick: Function
  handleChange: Function
}

const Input: React.FC<Props> = ({ nameInput, handleClick, handleChange }: Props) => {
  return (
    <InputWrapper>
      <LocalIcon color="#505050" />
      <InputItem type="text" value={nameInput} onChange={handleChange} />
      <InputIconClick onClick={() => handleClick()}>
        <Search width="40px" height="40px" />
      </InputIconClick>
    </InputWrapper>
  )
}

export default Input
