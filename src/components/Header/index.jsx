import { StyledHeader } from './style';

import { useApi } from '../../hooks/useApi';
import { WeatherContext } from '../../contexts/WeatherContext';

import { useContext, useEffect, useState } from 'react';

import { ArrowRight } from 'phosphor-react'
//import icone from '/public/assets/icons/bussola.svg'


export function Header() {
  const [local, setLocal] = useState('');
  const [searchResults, setSearchResults] = useState([])
  const { updateWeather } = useContext(WeatherContext);

  const { getCitySugestion, getWeatherFromCoord, getWeather } = useApi();

  useEffect(()=>{
    function getCoord(){
      //Verifica se a localização está disponível e, se estiver obtém os dados de tempo da localização e salva no contexto
      if ("geolocation" in navigator) {
        (
          navigator.geolocation.getCurrentPosition(function(position) {

            const lat =  position.coords.latitude;

            const long = position.coords.longitude;

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

  //função chamada quando um local é selecionado. Puxa dados da API de tempo ou indica erro na tela inicial caso não encontre um local correspondente.
  async function mudaTempo(){
    await getWeather(local).then(
      result=>updateWeather(result)
    ).catch(err=>{
      console.log(err)
      setLocal("Local não encontrado")
    })
  }

  //Função que gera os resultados da busca para aparecer na sugestão da barra de pesquisa. Filtra array para resultados únicos.
  function getSearchResults(){
    if(local.length > 2){
      getCitySugestion(local).then(results => {
        if(results !== "error"){
          const entries = results.filter((result, index)=>{
            return results.indexOf(result) === index
          })
          setSearchResults(entries)
        }})
    }
  }
  //Barra de pesquisa atualiza o valor do estado "local" quando atualizada, e também os resultados da busca. A datalist é referente a estes resultados.
  //O botão de envio apenas aparece quando há uma busca digitada.
  return (
    <StyledHeader>
      <img src='/assets/icons/bussola.svg' alt="Ícone de uma bússola" />
      <input
        id="local"
        value={local}
        onChange={(event) =>{ 
          setLocal(event.target.value)
          getSearchResults()
        }}
        type="search"
        list="locais"
        placeholder='Digite um local'
        aria-label='Digite um local para pesquisar'
      />
      <datalist id="locais">
        {searchResults.map((result, index)=>{
          return <option key={index} value={result} />
        })}
      </datalist>
      {local && 
        <>
          <label className='hidden' for="enviar">Enviar</label>
          <button 
            onClick={mudaTempo}
            id="enviar"
          >
              <ArrowRight/>
          </button>
        </>
      }
    </StyledHeader>
  );
}
