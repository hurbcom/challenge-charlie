import styled from "@emotion/styled/macro";
import { NoGeolocation } from "components/NoGeolocation";
import { useBingImageAsBackground } from "hooks/useBingImageAsBackground";
import { withHocs, withIf } from "react-new-hoc";

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .content {
    max-width: 1024px;
    width: 100%;

    & > .header {
      height: 160px;
      background: #f0ebe8dd;
      padding: 30px;
      box-sizing: border-box;
      color: #8a8683;
      display: flex;
      place-items: center;
      gap: 30px;
      font-size: 50px;
      font-weight: bold;

      .icon {
        font-size: 90px;
        font-weight: initial;
      }
    }

    & > .today,
    & > .tomorrow,
    & > .after-tomorrow {
      color: white;
    }

    & > .today {
      height: 550px;
      background: #e2b814dd;
      display: grid;
      grid-template-columns: 540px 1fr;

      & > .info {
        font-size: 40px;
        padding: 40px;
      }

      .icon {
        font-size: 520px;
      }
    }

    & > .tomorrow,
    & > .after-tomorrow {
      font-size: 40px;
      height: 180px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 580px;
    }

    & > .tomorrow {
      background: #faca04dd;
    }

    & > .after-tomorrow {
      background: #b59502dd;
    }
  }
`;

function App() {
  useBingImageAsBackground();

  return (
    <Container>
      <div className="content">
        <div className="header">
          <span className="icon" data-icon="(" />
          <span
            style={{
              marginBottom: "15px",
            }}
          >
            Rio de Janeiro, Rio de Janeiro
          </span>
        </div>
        <div className="today">
          <div style={{ overflow: "hidden" }}>
            <span className="icon" data-icon="B" />
          </div>
          <div className="info">
            <div style={{ fontWeight: "bold" }}>HOJE</div>
            <div style={{ fontWeight: "bold" }}>32ºC</div>
            <div style={{ height: "50px" }} />
            <div>Ensolarado</div>
            <div>Vento: NO 6.4km/h</div>
            <div>Humidade: 78%</div>
            <div>Pressão: 1003hPA</div>
          </div>
        </div>
        <div className="tomorrow">
          <div>AMANHÃ</div>
          <div>25ºC</div>
        </div>
        <div className="after-tomorrow">
          <div>DEPOIS DE AMANHÃ</div>
          <div>25ºC</div>
        </div>
      </div>
    </Container>
  );
}

export default withHocs(
  withIf(() => navigator.geolocation, {
    dependencyNames: [],
    Else: NoGeolocation,
  })
)(App);
