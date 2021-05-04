import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import axios from "axios";
import AsyncSelect from "react-select/async";

import styles from "./styles.module.scss";
import fetchLocationOpenCage from "../services/ForwardGeocoding";
import FetchWeatherService from "../services/FetchWeather";
import Card from "../components/Card";
import SubCard from "../components/Subcard";
import ReverseGeocoding from "../services/ReverseGeocoding";

type HomeProps = {
  bingImageUrl: string;
};
interface City {
  label: string;
  name: string;
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface Temperature {
  celsius: number;
  fahrenheit: number;
}

interface Weather {
  today: {
    temperature: Temperature;
    condition: string;
    wind: number;
    humidity: number;
    pressure: number;
    icon: string;
  };
  tomorrow: {
    label: string;
    temperature: Temperature;
  };
  afterTomorrow: {
    label: string;
    temperature: Temperature;
  };
}

const Home = ({ bingImageUrl }: HomeProps) => {
  const [city, setCity] = useState({} as City);
  const [weather, setWeather] = useState({} as Weather);
  const [toggleCelsius, setToggleCelsius] = useState(true);
  const [toggleFahrenheit, setToggleFahrenheit] = useState(false);

  const changeTemperatureUnit = () => {
    if (toggleCelsius) {
      setToggleCelsius(false);
      setToggleFahrenheit(true);
      return;
    }

    setToggleCelsius(true);
    setToggleFahrenheit(false);
  };

  const loadOptions = async (
    inputValue: string,
    callback: (cities: unknown[]) => void
  ) => {
    if (inputValue.length < 3) return;

    const cities = await fetchLocationOpenCage(inputValue);

    callback(cities);
  };

  useEffect(() => {
    if (!city.label) return;

    async function getWeather() {
      const weatherPayload = await FetchWeatherService(city.coords);
      setWeather(weatherPayload);
    }

    getWeather();
  }, [city]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const weatherPayload = await FetchWeatherService({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        const cityPayload = await ReverseGeocoding({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setWeather(weatherPayload);
        setCity(cityPayload);
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Weather App</title>
      </Head>
      <div
        className={styles.homeContainer}
        style={{ backgroundImage: `url(${bingImageUrl})` }}
      >
        <main>
          <div className={styles.inputContainer}>
            <AsyncSelect
              placeholder="Digite uma cidade para busca"
              classNamePrefix="filter"
              //@ts-ignore
              loadOptions={loadOptions}
              onChange={setCity}
              value={city}
              instanceId="select"
            />
          </div>

          <Card
            today={weather.today}
            toggleCelsius={toggleCelsius}
            toggleFahrenheit={toggleFahrenheit}
            changeTemperatureUnit={changeTemperatureUnit}
          />

          <SubCard
            temperature={weather.tomorrow?.temperature}
            label={weather.tomorrow?.label}
            toggleCelsius={toggleCelsius}
            toggleFahrenheit={toggleFahrenheit}
            changeTemperatureUnit={changeTemperatureUnit}
          />

          <SubCard
            temperature={weather.afterTomorrow?.temperature}
            label={weather.afterTomorrow?.label}
            toggleCelsius={toggleCelsius}
            toggleFahrenheit={toggleFahrenheit}
            changeTemperatureUnit={changeTemperatureUnit}
          />
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US"
  );
  const imageUrl = data.images[0].url;
  const formattedBingImageUrl = `https://bing.com${imageUrl}`;

  return {
    props: {
      bingImageUrl: formattedBingImageUrl,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Home;
