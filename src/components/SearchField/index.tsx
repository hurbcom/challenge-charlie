import './styles.css';
import { useState } from 'react';

interface SearchFieldPros {
  initialValue: string;
  onSearch: (cityName: string) => void;
}

export function SearchField({ initialValue, onSearch }: SearchFieldPros) {
  const [inputValue, setInputValue] = useState(initialValue);

  return (
    <input
      className="search-field__input"
      type="text"
      placeholder="Digite o nome da cidade, estado"
      onKeyDown={(event) => event.code === 'Enter' && onSearch(inputValue)}
      value={inputValue}
      onBlur={() => onSearch(inputValue)}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
