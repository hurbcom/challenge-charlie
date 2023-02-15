import React from 'react';
import * as S from './style';

export function Image ({ alt, src }) {
  return (
    <S.Image
      src={src}
      alt={alt}
    />
  )
}
