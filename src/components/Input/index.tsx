import React from 'react'
import { InputWrapper, InputItem } from './Input.style'
import LocalIcon from '../../assets/icons/LocalIcon'

type Props = {
  nameInput: string
  handleClick: Function
  handleChange: Function
}

const Input: React.FC<Props> = ({ nameInput, handleClick, handleChange }: Props) => {
  return (
    <InputWrapper>
      <LocalIcon width="40px" height="40px" color="#505050" />
      <InputItem type="text" value={nameInput} onChange={handleChange} />
      <button onClick={() => handleClick()}>FIND</button>
    </InputWrapper>
  )
}

export default Input
