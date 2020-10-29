import React, { useEffect, useState } from 'react';
import { CompassIcon, Container, Input } from './styles';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  loading?: boolean;
  onSubmitSearch: (value: string) => void;
  foundLocation?: string;
}

export const SearchInput = ({ loading, onSubmitSearch, foundLocation, ...rest }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    foundLocation && setInputValue(foundLocation);
  }, [foundLocation]);

  return (
    <Container>
      <CompassIcon src={'/assets/icons/compass.svg'} isLoading={loading} />
      <Input
        {...rest}
        type="text"
        placeholder="Busca"
        data-cy={'search-input'}
        value={inputValue}
        onChange={ev => setInputValue(ev?.currentTarget?.value)}
        onKeyDown={ev => {
          if (ev.keyCode === 13 /* Enter */) {
            onSubmitSearch(inputValue);
          }
        }}
      />
    </Container>
  );
};
