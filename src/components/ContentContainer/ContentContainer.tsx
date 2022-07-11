import React, { useEffect } from "react";
import { fetchWeather } from "../../services/fetchService";
import { useStore } from "../../store/store";
import Search from "../Search/Search";
import Today from "../Days/Today/Today";
import Tomorrow from "../Days/Tomorrow/Tomorrow";
import Overmorrow from "../Days/Overmorrow/Overmorrow";
import Loading from "../Loading/Loading";

const ContentContainer = () => {
  const isLoading = useStore((state) => state.isLoading);
  const setLoading = useStore((state) => state.setLoading);
  const coords = useStore((state) => state.coords);
  const forecast = useStore((state) => state.forecast);
  const setForecast = useStore((state) => state.setForecast);
  const setTheme = useStore((state) => state.setGlobalTheme);

  const weatherEffect = () => {
    if (coords.latitude && !forecast.today?.temp) {
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

  useEffect(weatherEffect, [coords]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col mx-[30%] items-center my-[5vh] rounded-xl drop-shadow-md">
          <Search />
          <Today />
          <Tomorrow />
          <Overmorrow />
        </div>
      )}
    </>
  );
};

export default ContentContainer;
