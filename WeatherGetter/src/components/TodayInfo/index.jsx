import { useContext } from 'react'

import { StyledSection } from './style';
import icone from "../../assets/icons/2.svg"

import {WeatherContext} from '../../contexts/WeatherContext'

export function TodayInfo({tipoTemperatura, alteraTipoTemp}) {
  const { weather } = useContext(WeatherContext);  

  const temperaturas = {
    agora: tipoTemperatura ? weather.hoje.tempAtual : convertTemp(30),
    min: tipoTemperatura ? weather.hoje.min : convertTemp(30),
    max: tipoTemperatura ? weather.hoje.max : convertTemp(30)
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
  const cor = tempColor(25)

  return (
    <StyledSection cor={cor}>
      <img
        src={icone}
        alt="Ícone representando clima do dia."
      />
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
        <p id="clima">Ensolarado</p>
        <p>Vento: NO 6.4km/h</p>
        <p>Humidade: 78%</p>
        <p>Pressão: 1003hPa</p>
      </div>
    </StyledSection>
  );
}
