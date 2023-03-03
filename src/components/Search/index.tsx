import React, { forwardRef, InputHTMLAttributes, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { ImSpinner2 } from 'react-icons/im';

import { theme } from '~/styles/theme';

import * as S from './styles';

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading: boolean;
  withError: boolean;
  cleanSearch: () => void;
  onSearch: (value: string) => void;
  icon?: {
    svg: string;
    alt: string;
    position: number;
  };
}

export interface InputHandleProps {
  focus: () => void;
}

export const Search = forwardRef<InputHandleProps, SearchProps>(
  ({ icon, value, onSearch, cleanSearch, isLoading, withError, ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [currentValue, setCurrentValue] = useState('');

    useImperativeHandle(
      ref,
      () => {
        return {
          focus: () => inputRef?.current?.focus(),
        };
      },
      [],
    );

    useEffect(() => {
      if (!!value && typeof value === 'string') {
        setCurrentValue(value);
      }
    }, [value]);

    useEffect(() => {
      if (!currentValue || (currentValue.length <= 2 && currentValue !== value)) {
        cleanSearch();
      }
    }, [cleanSearch, currentValue, value]);

    const hasIcon = !!icon && !!icon.svg;

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      if (!value.match(/^$|[A-Za-z]/g)) return;

      setCurrentValue(event.target.value);
    };

    const handleOnSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!!value) {
        cleanSearch();
        setCurrentValue('');

        return inputRef?.current?.focus();
      }

      return onSearch(currentValue);
    };

    const renderIcon = () => {
      if (isLoading) return <ImSpinner2 color={theme.colors.white} size={theme.sizings[40]} />;

      if (!!value) return <IoMdClose color={theme.colors.white} size={theme.sizings[40]} />;

      return 'Buscar';
    };

    return (
      <S.Container iconPosition={icon?.position} onSubmit={handleOnSearch}>
        {hasIcon && (
          <Image
            title={`Posição atual do vento ${icon.position}º`}
            src={`assets/${icon.svg}.svg`}
            alt={icon.alt}
            width={48}
            height={48}
            aria-label={icon.alt}
          />
        )}

        <S.Input {...rest} ref={inputRef} value={currentValue} onChange={handleOnChange} withError={withError} />

        <S.Button
          type="submit"
          withError={withError}
          isClose={!isLoading && !!value}
          disabled={isLoading || currentValue.length === 0}
          title={isLoading ? 'Buscando cidade...' : 'Buscar cidade'}
        >
          {renderIcon()}
        </S.Button>
      </S.Container>
    );
  },
);

Search.displayName = 'Search';
