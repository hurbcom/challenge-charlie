import { StyledSection } from './style';

export function FutureInfo() {
  return (
    <StyledSection>
      <div id="tomorrow">
        <p>Amanhã</p>
        <div id="temperatures">
          <div>
            <p>Agora</p>
            <p>30°C</p>
          </div>
          <div>
            <p>Min.</p>
            <p>30°C</p>
          </div>
          <div>
            <p>Máx.</p>
            <p>30°C</p>
          </div>
        </div>
      </div>
      <div id="afterTomorrow">
        <p>Depois de amanhã</p>
        <div id="temperatures">
          <div>
            <p>Agora</p>
            <p>30°C</p>
          </div>
          <div>
            <p>Min.</p>
            <p>30°C</p>
          </div>
          <div>
            <p>Máx.</p>
            <p>30°C</p>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
