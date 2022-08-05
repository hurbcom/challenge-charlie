import { StyledSection } from './style';
import icone from "../../assets/icons/2.svg"

export function TodayInfo() {
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
            <p>30°C</p>
            </div>
            <div id="temperature">
            <p>Min.</p>
            <p>30°C</p>
            </div>
            <div id="temperature">
            <p>Máx.</p>
            <p>30°C</p>
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
