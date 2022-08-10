import { StyledHeader } from './style';

import { useApi } from '../../hooks/useApi';
import { WeatherContext } from '../../contexts/WeatherContext';

import { useContext, useEffect, useState } from 'react';

import { ArrowRight } from 'phosphor-react'
import icone from '../../assets/icons/44.svg'


export function Header() {
  const [local, setLocal] = useState('');
  const [searchResults, setSearchResults] = useState([])
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

  function getSearchResults(){
    if(local.length > 2){
      getCityFromCoord(local).then(results => {
        if(results !== "error"){
          const entries = results.filter((result, index)=>{
            return results.indexOf(result) === index
          })

          console.log(entries)

          setSearchResults(entries)
        }})
    }
    console.log(searchResults)
  }

  return (
    <StyledHeader>
      <img src={icone} alt="Ícone de uma bússola" />
      <input
        value={local}
        onChange={(event) =>{ 
          setLocal(event.target.value)
          getSearchResults()
        }}
        type="search"
        list="locais"
        placeholder='Digite um local'
      />
      <datalist id="locais">
        {searchResults.map((result, index)=>{
          return <option key={index} value={result} />
        })}
      </datalist>
      {local && <button onClick={mudaTempo}><ArrowRight/></button>}
    </StyledHeader>
  );
}
