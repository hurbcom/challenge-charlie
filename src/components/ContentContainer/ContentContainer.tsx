import React, { useEffect } from "react";
import { fetchWeather } from "../../services/fetchService";
import { useStore } from "../../store/store";
import Search from "../Search/Search";
import Today from "../Days/Today/Today";
import Tomorrow from "../Days/Tomorrow/Tomorrow";
import Overmorrow from "../Days/Overmorrow/Overmorrow";
import Loading from "../Loading/Loading";
import EmptyLocation from "../EmptyLocation/EmptyLocation";

const ContentContainer = () => {
  const isLoading = useStore((state) => state.isLoading);
  const setLoading = useStore((state) => state.setLoading);
  const coords = useStore((state) => state.coords);
  const forecast = useStore((state) => state.forecast);
  const location = useStore((state) => state.location);
  const setForecast = useStore((state) => state.setForecast);
  const setTheme = useStore((state) => state.setGlobalTheme);

  const weatherEffect = () => {
    if (coords.latitude && !forecast.today?.temp && location.city) {
      fetchWeather(coords.latitude, coords.longitude)
        .then((data) => {
          setForecast(data);
          setTheme(data.today.temp);
          setLoading();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(weatherEffect, [coords, location]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col w-full md:w-[40%] mx-auto items-center md:my-[17.5vh] lg:my-[2.5vh] rounded-xl md:drop-shadow-md">
          <Search />
          {location.city ? (
            <>
              <Today />
              <Tomorrow />
              <Overmorrow />
            </>
          ) : (
            <EmptyLocation />
          )}
        </div>
      )}
    </>
  );
};

export default ContentContainer;
