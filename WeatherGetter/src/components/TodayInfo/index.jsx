import { useContext } from 'react'

import { StyledSection } from './style';

import {WeatherContext} from '../../contexts/WeatherContext'

import { CircleNotch } from 'phosphor-react'

export function TodayInfo({tipoTemperatura, alteraTipoTemp}) {
  const { weather } = useContext(WeatherContext);  

  
  const temperaturas = {
    agora: tipoTemperatura ? weather.hoje.tempAtual : convertTemp(weather.hoje.tempAtual),
    min: tipoTemperatura ? weather.hoje.min : convertTemp(weather.hoje.min),
    max: tipoTemperatura ? weather.hoje.max : convertTemp(weather.hoje.max)
  }

  //variável que muda o simbolo da temperatura de acordo com a seleção atual
  const tempLogo = tipoTemperatura ? "°C" : "°F"

  //função para conversão dos valores de temperatura
  function convertTemp(temp){
    return temp*9/5 + 32
  }

  //função matemática para converter as temperaturas para um valor HUE correspondente
  function tempColor(temp){
    if(temp < 15){
      return (temp+60)*70/75+180
    }else if(temp > 35){
      return 15 - (temp-35) * 15/25
    }else{
      return 60 - (temp-15) * 35/25
    }
  }

  //Define as HUE das cores para o background de acordo com as temperaturas em celsius
  const cor = tempColor(weather.hoje.tempAtual)
  const sat = weather.hoje.clima === 'Carregando' ? 0 : 100

  return (
    <StyledSection cor={cor} sat={sat}>
      {weather.hoje.clima === 'Carregando' ? 
        <CircleNotch id="loading-icon" size={96}/> :
        <img
          src={`src/assets/icons/${weather.hoje.icone}.svg`}
          alt="Ícone representando clima do dia."
        /> 
        }
      <div id="infoSection">
        <p id="dia">Hoje</p>
        <div id="tempSection">
            <div id="temperature">
              <p>Agora</p>
              <button onClick={alteraTipoTemp}>
                <h1>{temperaturas.agora}{tempLogo}</h1>
              </button>
            </div>
            <div id="temperature">
              <p>Min.</p>
              <button onClick={alteraTipoTemp}>
                <h1>{temperaturas.min}{tempLogo}</h1>
              </button>
            </div>
            <div id="temperature">
              <p>Máx.</p>
              <button onClick={alteraTipoTemp}>
                <h1>{temperaturas.max}{tempLogo}</h1>
              </button>
            </div>
        </div>
        <p id="clima">{weather.hoje.clima}</p>
        <p>Vento: {weather.hoje.vento.deg}° {weather.hoje.vento.velocidade}km/h</p>
        <p>Humidade: {weather.hoje.humidade}%</p>
        <p>Pressão: {weather.hoje.pressao}hPa</p>
      </div>
    </StyledSection>
  );
}
