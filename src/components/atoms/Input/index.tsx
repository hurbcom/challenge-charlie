import React, { useState } from 'react';
import { InputContainer, InputCustom, Image } from './styles';
import Bussola from  '../../../assets/icons/compass.svg'
import { InputProps } from './types';



const Input = ({
  value,
  onChange,
  onBlur,
}: InputProps) => {
  return (
    <InputContainer>
      <Image src={Bussola} width={20} alt="Bussola"/>
      <InputCustom
        id="input-weather"
        type="text"
        value={value}
        onChange={(ev) => {
          onChange(ev.target.value.replace(/[^a-zA-Z, ]/g, ''))
        }}
        onBlur={(onBlur)} />
    </InputContainer>

  )

}

export default Input;