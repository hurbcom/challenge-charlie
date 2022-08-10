import { StyledHeader } from './style';

import { useApi } from '../../hooks/useApi';
import { WeatherContext } from '../../contexts/WeatherContext';

import { useContext, useEffect, useState } from 'react';

import { ArrowRight } from 'phosphor-react'
import icone from '../../assets/icons/44.svg'


export function Header() {
  const [local, setLocal] = useState('');
  const { updateWeather } = useContext(WeatherContext);

  const { getCityFromCoord, getWeatherFromCoord, getWeather } = useApi();

  useEffect(()=>{
    function getCoord(){
      if ("geolocation" in navigator) {
        (
          navigator.geolocation.getCurrentPosition(function(position) {

            const lat =  position.coords.latitude;

            const long = position.coords.longitude;

            console.log(lat, long)

            getCityFromCoord({'lat': lat, 'long': long}).then(
              result=>console.log(result)
            )

            getWeatherFromCoord({'lat': lat, 'long': long}).then(
              result=>updateWeather(result)
            )

          }))
        }else{
          console.log('Posição indisponível')
        }
    }

    getCoord()
  }, [])

  async function mudaTempo(){
    await getWeather(local).then(
      result=>updateWeather(result)
    ).catch(err=>{
      console.log(err)
      setLocal("Local não encontrado")
    })
  }

  return (
    <StyledHeader>
      <img src={icone} alt="Ícone de uma bússola" />
      <input
        value={local}
        onChange={(event) => 
          setLocal(event.target.value)
          }
        type="search"
        list="locais"
        placeholder='Digite um local'
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
