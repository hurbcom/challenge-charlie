import React, { forwardRef, InputHTMLAttributes, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Image from 'next/image';

import { useInputDebounce } from '~/hooks';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: {
    svg: string;
    alt: string;
    position: number;
  };
}

export interface InputHandleProps {
  focus: () => void;
}

export const Input = forwardRef<InputHandleProps, InputProps>(({ icon, onChange, value, ...rest }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [currentValue, setCurrentValue] = useState('');

  const { debouncedCallback } = useInputDebounce(onChange);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef?.current?.focus(),
  }));

  useEffect(() => {
    if (!!value && typeof value === 'string') {
      setCurrentValue(value);
    }
  }, [value]);

  const hasIcon = !!icon && !!icon.svg;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value.match(/^$|[A-Za-z]/g)) return;

    debouncedCallback(event);

    setCurrentValue(event.target.value);
  };

  return (
    <S.Container onClick={() => inputRef.current?.focus()} iconPosition={icon?.position}>
      {hasIcon && <Image src={`assets/${icon.svg}.svg`} alt={icon.alt} width={48} height={48} aria-label={icon.alt} />}

      <S.Input {...rest} ref={inputRef} value={currentValue} onChange={handleOnChange} />
    </S.Container>
  );
});

Input.displayName = 'Input';
