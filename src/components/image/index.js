import React from 'react';
import * as S from './style';

export function Image ({ alt, src, gridArea }) {
  return (
    <S.Image
      src={src}
      alt={alt}
      gridArea={gridArea}
    />
  )
}
