import React from 'react';
import * as S from './style';

export function Label ({ value, bold }) {
  return (
    <S.Label bold={bold}>{value}</S.Label>
  )
}
