import { Tomorrow,  AfterTomorrow, Temperature} from './style';

export function FutureInfo({tipoTemperatura, alteraTipoTemp}) {

  const temperaturasAmanha = {
    agora: tipoTemperatura ? 30 : convertTemp(30),
    min: tipoTemperatura ? 30 : convertTemp(30),
    max: tipoTemperatura ? 30 : convertTemp(30)
  }
  const temperaturasDepAmanha = {
    agora: tipoTemperatura ? 30 : convertTemp(30),
    min: tipoTemperatura ? 30 : convertTemp(30),
    max: tipoTemperatura ? 30 : convertTemp(30)
  }

  //Constante que muda o simbolo sendo mostrado de acordo com o tipo de temperatura
  const simboloTemp = tipoTemperatura ? "°C" : "°F"

  //função para converter o valor da temperatura
  function convertTemp(temp){
    return temp*9/5 + 32
  }
  
  return (
    <>
      <Tomorrow>
        <h1 id='day'>Amanhã</h1>
        <Temperature>
          <div>
            <p>Agora</p>
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
      <AfterTomorrow>
        <h1 id='day'>Depois de amanhã</h1>
        <Temperature>
          <div>
            <p>Agora</p>
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
