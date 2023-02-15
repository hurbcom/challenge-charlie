import React, { ComponentProps, useRef } from 'react';
import Image from 'next/image';

import * as S from './styles';

interface InputProps extends ComponentProps<typeof S.Input> {
  icon?: {
    svg: string;
    alt: string;
  };
}

export const Input = ({ icon, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <S.Container onClick={() => inputRef.current?.focus()}>
      {!!icon && !!icon.svg && <Image src={icon.svg} width={48} height={48} alt={icon.alt} aria-label={icon.alt} />}

      <S.Input {...rest} ref={inputRef} />
    </S.Container>
  );
};
