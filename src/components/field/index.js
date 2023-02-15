import React from 'react';
import * as S from './style';

export function Field ({ placeholder, value, onChange }) {
  return (
    <S.Input
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
