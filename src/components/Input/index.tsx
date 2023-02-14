import React, { ComponentProps } from 'react';
import Image from 'next/image';

import * as S from './styles';

interface InputProps extends ComponentProps<typeof S.Input> {
  icon?: {
    svg: string;
    alt: string;
  };
}

const Input = ({ icon, ...rest }: InputProps) => {
  return (
    <S.Container>
      {!!icon && !!icon.svg && (
        <S.Icon>
          <Image src={icon.svg} width={48} height={48} alt={icon.alt} aria-label={icon.alt} />
        </S.Icon>
      )}

      <S.Input {...rest} />
    </S.Container>
  );
};

export default Input;
