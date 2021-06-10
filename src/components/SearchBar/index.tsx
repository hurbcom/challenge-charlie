import React from 'react';

import Input from '../Input';
import { Container } from './styles';

interface SearchBarProps {
    onSubmit?: any;
    inputRef?: any;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit, inputRef }) => {
    return (
        <Container onSubmit={onSubmit}>
            <Input
                inputRef={inputRef}
                placeholder="Cidade, Estado, País"
                name="searchLocation"
            />
            <button type="submit">Pesquisar</button>
        </Container>
    );
};

export default SearchBar;
