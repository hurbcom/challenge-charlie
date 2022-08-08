import { Tomorrow,  AfterTomorrow, Temperature} from './style';

export function FutureInfo({tipoTemperatura, alteraTipoTemp}) {



  const temperaturasAmanha = {
    agora: tipoTemperatura ? 14 : convertTemp(14),
    min: tipoTemperatura ? 30 : convertTemp(30),
    max: tipoTemperatura ? 30 : convertTemp(30)
  }
  const temperaturasDepAmanha = {
    agora: tipoTemperatura ? 36 : convertTemp(36),
    min: tipoTemperatura ? 30 : convertTemp(30),
    max: tipoTemperatura ? 30 : convertTemp(30)
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
      amanha: tempColor(14),
      depAmanha: tempColor(36)
    }

    return cores
  }
  
  return (
    <>
      <Tomorrow data-testid="amanha" cor = {getCores().amanha}>
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
      <AfterTomorrow data-testid="depAmanha" cor = {getCores().depAmanha}>
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
