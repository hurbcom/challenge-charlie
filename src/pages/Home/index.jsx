import React, { useEffect, useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import * as S from "./styles";
import useGeoLocation from "../../hooks/useGeoLocation";
import { useForecastContext } from "../../context/ForecastContext";
import { Search } from "../../components/Search";
import { WeatherCard } from "../../components/WeatherCard";
import { Loading } from "../../components/Loading";
import { Notification } from "../../components/Notification";
import useFetch from "../../hooks/useFetch";

export const Home = () => {
  const { result, fetchUrl } = useFetch();
  const [geoLocationError, setGeoLocationError] = useState("");
  const location = useGeoLocation();
  const { isLoading, error, data, currentPlace, getForecastByParams } =
    useForecastContext();

  const onSubmit = (value) => {
    getForecastByParams({ q: value });
  };

  useEffect(() => {
    fetchUrl("http://localhost:5000/photo");
  }, []);

  useEffect(() => {
    const onSearchByLocation = () => {
      if (location.loaded) {
        location.coordinates &&
          getForecastByParams({
            lat: location.coordinates.lat,
            lon: location.coordinates.lon,
          });
      }
    };
    onSearchByLocation();
  }, [location]);

  const onSetCoordinates = () => {
    location.error
      ? setGeoLocationError(location.error.message)
      : getForecastByParams({
          lat: location.coordinates.lat,
          lon: location.coordinates.lon,
        });
  };

  const closeNotification = () => {
    setGeoLocationError(null);
  };

  return (
    <S.Main background={result && result.url}>
      <S.Content>
        <Search
          onSubmit={onSubmit}
          error={error}
          city={currentPlace.name}
          onSetCoordinates={onSetCoordinates}
        />

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
        {isLoading && <Loading height={400} />}
        {!currentPlace.name && (
          <S.Help>pesquise uma cidade ou habilite a localidade</S.Help>
        )}
        {geoLocationError && (
          <Notification
            notification={geoLocationError}
            onCloseNotification={closeNotification}
            timer={3000}
          />
        )}
      </S.Content>

      <S.PhotoTitle>
        <S.Icon>
          <MdPhotoCamera size={26} />
        </S.Icon>
        {result && result.title}
      </S.PhotoTitle>
    </S.Main>
  );
};
