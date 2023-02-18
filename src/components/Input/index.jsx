import React from 'react';
import { Search } from "../../components/Icons/Search"
import { Container } from "./Styles"

export function Input({handleKeyDown, setText}) {
  return (
    <Container>
        <Search color="#8D8986" />
        <input placeholder='Pesquisar...' type="text" name="" id="" onChange={(ev) => setText(ev.target.value)} onKeyDown={handleKeyDown} />
    </Container>
  );
}