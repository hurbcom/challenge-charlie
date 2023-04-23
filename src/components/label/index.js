import React from 'react';
import * as S from './style';

export function Label ({ value, gridArea, bold }) {
  return (
    <S.Label gridArea={gridArea} bold={bold}>{value}</S.Label>
  )
}
