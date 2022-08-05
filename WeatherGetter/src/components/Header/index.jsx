import { StyledHeader } from './style';
import { useState } from 'react';
import icone from '../../assets/icons/44.svg'

export function Header() {
  const [local, setLocal] = useState('');
  return (
    <StyledHeader>
      <img src={icone} alt="Ícone de uma bússola" />
      <input
        value={local}
        onChange={(event) => setLocal(event.target.value)}
        type="search"
        list="locais"
      />
      <datalist id="locais">
        <option value="Rio de Janeiro" />
        <option value="São Paulo" />
        <option value="Salvador" />
      </datalist>
      <button>Pesquisar</button>
    </StyledHeader>
  );
}
