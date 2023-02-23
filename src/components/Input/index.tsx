import React, { ChangeEventHandler, forwardRef, InputHTMLAttributes, useImperativeHandle, useRef } from 'react';
import Image from 'next/image';

import { debounce } from '~/utils';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: {
    svg: string;
    alt: string;
  };
}

interface InputHandleProps {
  focus: () => void;
}

export const Input = forwardRef<InputHandleProps, InputProps>(({ icon, onChange, ...rest }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef?.current?.focus(),
  }));

  const hasIcon = !!icon && !!icon.svg;

  const handleOnChange = () => {
    if (!onChange) return;

    return debounce<React.ChangeEventHandler<HTMLInputElement>, React.ChangeEvent<HTMLInputElement>>({
      action: onChange,
    });
  };

  return (
    <S.Container onClick={() => inputRef.current?.focus()}>
      {hasIcon && <Image src={`assets/${icon.svg}.svg`} alt={icon.alt} width={48} height={48} aria-label={icon.alt} />}

      <S.Input {...rest} ref={inputRef} onChange={handleOnChange()} />
    </S.Container>
  );
});

Input.displayName = 'Input';
