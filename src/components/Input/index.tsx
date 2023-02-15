import React, { ComponentProps, ElementRef, forwardRef, useImperativeHandle, useRef } from 'react';
import Image from 'next/image';

import * as S from './styles';

interface InputProps extends ComponentProps<typeof S.Input> {
  icon?: {
    svg: string;
    alt: string;
  };
}

interface InputHandleProps {
  focus: () => void;
}

export const Input = forwardRef<InputHandleProps, InputProps>(({ icon, ...rest }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef?.current?.focus(),
  }));

  const hasIcon = !!icon && !!icon.svg;

  return (
    <S.Container onClick={() => inputRef.current?.focus()}>
      {hasIcon && <Image src={icon.svg} alt={icon.alt} width={48} height={48} aria-label={icon.alt} />}

      <S.Input {...rest} ref={inputRef} />
    </S.Container>
  );
});

Input.displayName = 'Input';
