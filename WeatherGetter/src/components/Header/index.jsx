import { StyledHeader } from './style';

import { useApi } from '../../hooks/useApi';
import { WeatherContext } from '../../contexts/WeatherContext';

import { useContext, useEffect, useState } from 'react';

import { ArrowRight } from 'phosphor-react'
import icone from '../../assets/icons/44.svg'


export function Header() {
  const [local, setLocal] = useState('Rio de Janeiro');
  const { updateWeather } = useContext(WeatherContext)

  const { getWeather } = useApi();

   useEffect(()=>{
     async function carregaTempo(){
      await getWeather(local).then(
        result=>updateWeather(result)
      )
     };

     carregaTempo()
   }, [])

  async function mudaTempo(){
    await getWeather(local).then(
      result=>updateWeather(result)
    )
  }

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
      {local && <button onClick={mudaTempo}><ArrowRight/></button>}
    </StyledHeader>
  );
}
