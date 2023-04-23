import React from 'react';
import * as S from './style';

export function Field ({ placeholder, value, gridArea, onChange, onKeyPress }) {
  return (
    <S.Input
      type='text'
      value={value}
      placeholder={placeholder}
      gridArea={gridArea}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  )
}
