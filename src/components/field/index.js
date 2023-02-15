import React from 'react';
import * as S from './style';

export function Field ({ placeholder, value, gridArea, onChange }) {
  return (
    <S.Input
      type='text'
      value={value}
      placeholder={placeholder}
      gridArea={gridArea}
      onChange={onChange}
    />
  )
}
