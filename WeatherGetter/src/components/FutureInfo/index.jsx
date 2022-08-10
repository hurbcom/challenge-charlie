import { Tomorrow,  AfterTomorrow, Temperature} from './style';

import { WeatherContext } from '../../contexts/WeatherContext'
import { useContext } from 'react';

export function FutureInfo({tipoTemperatura, alteraTipoTemp}) {

  const { weather } = useContext(WeatherContext)

  const temperaturasAmanha = {
    agora: tipoTemperatura ? weather.amanha.med : convertTemp(weather.amanha.med),
    min: tipoTemperatura ? weather.amanha.min : convertTemp(weather.amanha.min),
    max: tipoTemperatura ? weather.amanha.max : convertTemp(weather.amanha.max)
  }
  const temperaturasDepAmanha = {
    agora: tipoTemperatura ? weather.depAmanha.med : convertTemp(weather.depAmanha.med),
    min: tipoTemperatura ? weather.depAmanha.min : convertTemp(weather.depAmanha.min),
    max: tipoTemperatura ? weather.depAmanha.max : convertTemp(weather.depAmanha.max)
  }

  //Constante que muda o simbolo sendo mostrado de acordo com o tipo de temperatura
  const simboloTemp = tipoTemperatura ? "°C" : "°F"

  //função para converter o valor da temperatura
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
  function getCores(){
    const cores = {
      amanha: tempColor(weather.amanha.med),
      depAmanha: tempColor(weather.depAmanha.med)
    }

    return cores
  }
  const sat = weather.hoje.clima === 'Carregando' ? 0 : 100

  return (
    <>
      <Tomorrow data-testid="amanha" cor = {getCores().amanha} sat={sat}>
        <h1 id='day'>Amanhã</h1>
        <Temperature>
          <div>
            <p>Média</p>
            <button onClick={alteraTipoTemp}>
              <h1>{temperaturasAmanha.agora}{simboloTemp}</h1>
            </button>
          </div>
          <div>
            <p>Min.</p>
            <button onClick={alteraTipoTemp}>
              <h1>{temperaturasAmanha.min}{simboloTemp}</h1>
            </button>
          </div>
          <div>
            <p>Máx.</p>
            <button onClick={alteraTipoTemp}>
              <h1>{temperaturasAmanha.max}{simboloTemp}</h1>
            </button>
          </div>
        </Temperature>
      </Tomorrow>
      <AfterTomorrow data-testid="depAmanha" cor = {getCores().depAmanha} sat={sat}>
        <h1 id='day'>Depois de amanhã</h1>
        <Temperature>
          <div>
            <p>Média</p>
            <button onClick={alteraTipoTemp}>
              <h1>{temperaturasDepAmanha.agora}{simboloTemp}</h1>
            </button>
          </div>
          <div>
            <p>Min.</p>
            <button onClick={alteraTipoTemp}>
              <h1>{temperaturasDepAmanha.min}{simboloTemp}</h1>
            </button>
          </div>
          <div>
            <p>Máx.</p>
            <button onClick={alteraTipoTemp}>
              <h1>{temperaturasDepAmanha.max}{simboloTemp}</h1>
            </button>
          </div>
        </Temperature>
      </AfterTomorrow>
    </>
  );
}
