import React, { forwardRef, InputHTMLAttributes, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Image from 'next/image';
import { IoMdSearch } from 'react-icons/io';

import { theme } from '~/styles/theme';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: (value: string) => void;
  icon?: {
    svg: string;
    alt: string;
    position: number;
  };
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ icon, value, onSearch, ...rest }, ref) => {
  const [currentValue, setCurrentValue] = useState('');

  useEffect(() => {
    if (!!value && typeof value === 'string') {
      setCurrentValue(value);
    }
  }, [value]);

  const hasIcon = !!icon && !!icon.svg;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value.match(/^$|[A-Za-z]/g)) return;

    setCurrentValue(event.target.value);
  };

  return (
    <S.Container iconPosition={icon?.position}>
      {hasIcon && <Image src={`assets/${icon.svg}.svg`} alt={icon.alt} width={48} height={48} aria-label={icon.alt} />}

      <S.Input {...rest} ref={ref} value={currentValue} onChange={handleOnChange} />

      <S.Button title="Buscar cidade" onClick={() => onSearch(currentValue)}>
        <IoMdSearch color={theme.colors.blue} size={theme.sizings[40]} />
      </S.Button>
    </S.Container>
  );
});

Input.displayName = 'Input';
