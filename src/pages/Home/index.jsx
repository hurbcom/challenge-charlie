import React, { useEffect } from "react";
import * as S from "./styles";
import { Search } from "../../components/Search";
import { WeatherCard } from "../../components/WeatherCard";
import { Loading } from "../../components/Loading";
import { useForecastContext } from "../../context/ForecastContext";
import useGeoLocation from "../../hooks/useGeoLocation";

const img =
  "https://images.unsplash.com/photo-1657857984812-5b7b75472262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

export const Home = () => {
  const location = useGeoLocation();
  const { isLoading, error, data, currentPlace, getForecastByParams } =
    useForecastContext();

  const onSubmit = (value) => {
    getForecastByParams({ q: value });
  };

  useEffect(() => {
    const get = async () => {
      if (location.loaded) {
        await getForecastByParams({
          lat: location.coordinates.lat,
          lon: location.coordinates.lon,
        });
      }
    };
    get();
  }, [location]);

  return (
    <S.Main background={img}>
      <S.Content>
        <Search onSubmit={onSubmit} error={error} city={currentPlace.name} />
        {data.name && !isLoading && (
          <>
            <WeatherCard
              label="Hoje"
              temperature={data.daily[0].temp.day}
              iconCode={data.daily[0].weather[0].id}
              description={data.daily[0].weather[0].description}
              presure={data.daily[0].pressure}
              humidity={data.daily[0].humidity}
              wind={data.daily[0].wind_speed}
            />
            <WeatherCard
              label="Amanhã"
              temperature={data.daily[1].temp.day}
              iconCode={data.daily[1].weather[0].id}
              description={data.daily[1].weather[0].description}
              smallCard
            />
            <WeatherCard
              label="Depois de amanhã"
              temperature={data.daily[2].temp.day}
              iconCode={data.daily[2].weather[0].id}
              description={data.daily[2].weather[0].description}
              smallCard
            />
          </>
        )}
        {isLoading && <Loading />}
        {!currentPlace.name && (
          <S.Help>pesquiser uma cidade ou habilite a localidade</S.Help>
        )}
      </S.Content>
    </S.Main>
  );
};
