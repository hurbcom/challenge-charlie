import './styles.css';
import { useState } from 'react';

interface SearchFieldPros {
  initialValue: string;
  onSearch: (cityName: string) => void;
}

export function SearchField({ initialValue, onSearch }: SearchFieldPros) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleSearch = () => {
    // valite input
    onSearch(inputValue);
  };

  return (
    <input
      className="search-field__input"
      type="text"
      placeholder="Digite o nome da cidade, estado"
      onKeyDown={(event) => event.code === 'Enter' && handleSearch()}
      onBlur={() => handleSearch()}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
}
