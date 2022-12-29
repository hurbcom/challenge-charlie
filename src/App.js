import styled from "@emotion/styled/macro";
import { AfterTomorrow } from "components/AfterTomorrow";
import { Header } from "components/Header";
import { NoGeolocation } from "components/NoGeolocation";
import { Today } from "components/Today";
import { Tomorrow } from "components/Tomorrow";
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
        <Header cityName="Rio de Janeiro, Rio de Janeiro" />
        <Today
          backgroundColor="#e2b814"
          temperature="25ºC"
          kind="Ensolarado"
          wind="NO 6.4km/h"
          humidity="78%"
          pressure="1003hPA"
        />
        <Tomorrow temperature="26ºC" />
        <AfterTomorrow temperature="27ºC" />
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
