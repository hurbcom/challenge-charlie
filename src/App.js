import styled from "@emotion/styled/macro";
import { AfterTomorrow } from "components/AfterTomorrow";
import { Header } from "components/Header";
import { Loading } from "components/Loading";
import { NoGeolocation } from "components/NoGeolocation";
import { Temperature } from "components/Temperature";
import { Today } from "components/Today";
import { Tomorrow } from "components/Tomorrow";
import { useBingImageAsBackground } from "hooks/useBingImageAsBackground";
import { useCityInfoByLatLong } from "hooks/useCityInfoByLatLong";
import { useOpenWeather } from "hooks/useOpenWeather";
import { usePermissionLocation } from "hooks/usePermissionLocation";
import { usePosition } from "hooks/usePosition";
import { colorByCelsius } from "modules/colorByCelsius";
import { getFirstDayInfo } from "modules/getFirstDayInfo";
import { iconParse } from "modules/iconParse";
import { upperCaseFirst } from "modules/upperCaseFirst";
import { useEffect, useMemo } from "react";
import { withHocs, withIf, withState } from "react-new-hoc";
import create from "zustand";

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

export const useCityName = create(() => ({
  cityName: "",
}));

export const App = (() => {
  function App() {
    useBingImageAsBackground();
    const permission = usePermissionLocation();
    const position = usePosition({
      enabled: permission?.data === "granted",
    });
    const { data: cityInfo } = useCityInfoByLatLong(
      position.isFetched
        ? {
            latitude: position.data.coords.latitude,
            longitude: position.data.coords.longitude,
          }
        : {}
    );
    useEffect(() => {
      if (cityInfo) {
        const { city, state } = cityInfo.data.results[0].components;
        const cityName = [city, state].filter(Boolean).join(", ");
        useCityName.setState({
          cityName,
        });
      }
    }, [cityInfo]);
    const cityName = useCityName((state) => state.cityName);
    const weather = useOpenWeather(cityName);
    const weatherData = weather.data;
    const nextDaysWeather = useMemo(
      () =>
        weatherData && getFirstDayInfo(weatherData[1].data.list).slice(0, 2),
      [weatherData]
    );

    return (
      <Container>
        <div className="content">
          <Header
            cityName={
              permission.data === "granted"
                ? cityName
                : "Permita o uso da localização"
            }
            setCityName={(cityName) => useCityName.setState({ cityName })}
          />
          {weather.data ? (
            <>
              <Today
                backgroundColor={colorByCelsius(weather.data[0].data.main.temp)}
                temperature={
                  <Temperature celsius={weather.data[0].data.main.temp} />
                }
                kind={upperCaseFirst(
                  weather.data[0].data.weather[0].description
                )}
                wind={`${weather.data[0].data.wind.deg}º ${weather.data[0].data.wind.speed}m/s`}
                humidity={`${weather.data[0].data.main.humidity}%`}
                pressure={`${weather.data[0].data.main.pressure}hPA`}
                icon={iconParse(weather.data[0].data.weather[0].icon)}
              />
              <Tomorrow
                backgroundColor={colorByCelsius(nextDaysWeather[0].main.temp)}
                temperature={
                  <Temperature celsius={nextDaysWeather[0].main.temp} />
                }
              />
              <AfterTomorrow
                backgroundColor={colorByCelsius(nextDaysWeather[1].main.temp)}
                temperature={
                  <Temperature celsius={nextDaysWeather[1].main.temp} />
                }
              />
            </>
          ) : (
            <Loading />
          )}
        </div>
      </Container>
    );
  }

  return withHocs(
    withIf(() => navigator.geolocation, {
      dependencyNames: [],
      Else: NoGeolocation,
    }),
    withState("cityName", { init: "" })
  )(App);
})();
