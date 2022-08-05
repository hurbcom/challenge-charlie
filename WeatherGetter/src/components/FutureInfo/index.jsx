import { Tomorrow,  AfterTomorrow, Temperature} from './style';

export function FutureInfo() {
  return (
    <>
      <Tomorrow>
        <h1 id='day'>Amanhã</h1>
        <Temperature>
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
        </Temperature>
      </Tomorrow>
      <AfterTomorrow>
        <h1 id='day'>Depois de amanhã</h1>
        <Temperature>
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
        </Temperature>
      </AfterTomorrow>
    </>
  );
}
