import { StyledSection } from './style';
import icone from "../../assets/icons/2.svg"

export function TodayInfo({tipoTemperatura, alteraTipoTemp}) {
  

  const temperaturas = {
    agora: tipoTemperatura ? 30 : convertTemp(30),
    min: tipoTemperatura ? 30 : convertTemp(30),
    max: tipoTemperatura ? 30 : convertTemp(30)
  }

  //variável que muda o simbolo da temperatura de acordo com a seleção atual
  const tempLogo = tipoTemperatura ? "°C" : "°F"

  //função para conversão dos valores de temperatura
  function convertTemp(temp){
    return temp*9/5 + 32
  }

  return (
    <StyledSection>
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
