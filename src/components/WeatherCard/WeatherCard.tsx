import React, { useEffect } from "react";

import WeatherInput from "components/WeatherInput/WeatherInput";
import WeatherToday from "components/WeatherToday/WeatherToday";
import WeatherNextDays from "components/WeatherNextDays/WeatherNextDays";
import {
  fetchUserLocation,
  fetchCoordinatesByLocation,
} from "services/locationService";
import "components/WeatherCard/WeatherCard.scss";
import { useStore } from "store/store";
import { FormattedLocation } from "interfaces/FormattedLocation";
import { fetchWeather, fetchNextWeather } from "services/weatherService";
import {
  convertCelsiusFahrenheit,
  defineBackgroundColor,
  formatWeatherProperties,
  shadeColor,
} from "utils/utils";
import { Weather } from "interfaces/Weather";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";

const WeatherCard = () => {
  const {
    userLocation,
    setUserLocation,
    locationWeather,
    setLocationWeather,
    nextDaysWeather,
    addNextDayWeather,
    setBackgroundColor,
    backgroundColor,
    isCelsius,
    toggleCelsius,
    updateNextDayWeather,
    isLoading,
    setIsLoading,
  } = useStore();

  useEffect(() => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (userLocation.latitude) {
      fetchUserLocation(userLocation.latitude, userLocation.longitude).then(
        (formattedLocation: FormattedLocation) => {
          setUserLocation({
            ...userLocation,
            place: `${
              formattedLocation.city ? formattedLocation.city + "," : ""
            } ${formattedLocation.state ? formattedLocation.state + "," : ""} ${
              formattedLocation.country
            }`,
          });
        }
      );
    }
  }, [userLocation.latitude]);

  useEffect(() => {
    if (userLocation.place) {
      setIsLoading(true);
      fetchWeather(userLocation.place.split(" ")[0]).then((weather) => {
        const formattedWeather: Weather = formatWeatherProperties(weather);
        setLocationWeather({
          temperature: Math.round(formattedWeather.temperature),
          mood: formattedWeather.mood,
          windSpeed: formattedWeather.windSpeed,
          windDirection: formattedWeather.windDirection,
          humidity: formattedWeather.humidity,
          pressure: formattedWeather.pressure,
          icon: formattedWeather.icon,
        });
      });
      fetchNextWeather(userLocation.latitude, userLocation.longitude)
        .then((apiData) => {
          apiData.daily.map((weather, index) => {
            if (index < 2)
              addNextDayWeather({
                temperature: Math.round(weather.temp.day),
                id: index,
              });
          });
        })
        .finally(() => setIsLoading(false));
    }
  }, [userLocation.place]);

  useEffect(() => {
    if (locationWeather.temperature) {
      setBackgroundColor(
        defineBackgroundColor(locationWeather.temperature, isCelsius)
      );
    }
  }, [locationWeather.temperature]);

  const handleToggleCelsius = async () => {
    await toggleCelsius(!isCelsius);
    const convertedTemperature = convertCelsiusFahrenheit(
      locationWeather.temperature,
      isCelsius
    );
    setLocationWeather({
      ...locationWeather,
      temperature: convertedTemperature,
    });
    nextDaysWeather.map((nextDay) => {
      const nextDayConvertedTemperature = convertCelsiusFahrenheit(
        nextDay.temperature,
        isCelsius
      );
      updateNextDayWeather(nextDay, nextDayConvertedTemperature);
    });
  };

  const handleInputChange = (location: string) => {
    fetchCoordinatesByLocation(location).then((position) => {
      setUserLocation({
        latitude: position.latitude,
        longitude: position.longitude,
      });
    });
  };

  return (
    <div className="card">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <WeatherInput
            location={userLocation.place}
            handleInputChange={(location: string) =>
              handleInputChange(location)
            }
          />
          <WeatherToday
            weather={locationWeather}
            color={shadeColor(backgroundColor, 1.1)}
            isCelsius={isCelsius}
            toggleCelsius={handleToggleCelsius}
            location={userLocation.place}
          />
          {nextDaysWeather.length > 0 &&
            nextDaysWeather.map((nextWeather, index) => {
              return (
                <WeatherNextDays
                  key={index}
                  weather={nextWeather}
                  day={index}
                  color={
                    index == 0
                      ? backgroundColor
                      : shadeColor(backgroundColor, 1.8)
                  }
                  isCelsius={isCelsius}
                  toggleCelsius={handleToggleCelsius}
                />
              );
            })}
        </>
      )}
    </div>
  );
};

export default WeatherCard;
