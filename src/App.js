import styled from "@emotion/styled/macro";
import { AfterTomorrow } from "components/AfterTomorrow";
import { Header } from "components/Header";
import { NoGeolocation } from "components/NoGeolocation";
import { Today } from "components/Today";
import { Tomorrow } from "components/Tomorrow";
import { useBingImageAsBackground } from "hooks/useBingImageAsBackground";
import { colorByCelsius } from "modules/colorByCelsius";
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
      display: grid;
      place-items: center;
      gap: 30px;
      font-size: 50px;
      font-weight: bold;
      cursor: pointer;
      grid-template-columns: min-content 1fr;

      .icon {
        font-size: 90px;
        font-weight: initial;
      }

      input {
        font-size: 50px;
        width: 100%;
        background: none;
        border: none;
        font-weight: bold;
        color: #8a8683;
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
          backgroundColor={colorByCelsius(25)}
          temperature="25ºC"
          kind="Ensolarado"
          wind="NO 6.4km/h"
          humidity="78%"
          pressure="1003hPA"
        />
        <Tomorrow backgroundColor={colorByCelsius(10)} temperature="10ºC" />
        <AfterTomorrow
          backgroundColor={colorByCelsius(35)}
          temperature="35ºC"
        />
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
