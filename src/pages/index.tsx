import React, { useEffect, useState } from "react";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useDebounce } from "usehooks-ts";
import IMountedData from "./api/interfaces/IMountedData";

export default function Home() {
  const [data, setData] = useState<IMountedData>();
  const [isLoading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const debouncedValue = useDebounce<string>(city, 2000);

  const fetchWeatherData = async () => {
    if (city.length > 3) {
      setLoading(true);
      try {
        const response = await fetch(`/api/cityWeatherInfo?q=${city}`);
        const resultData = await response.json();
        console.log(resultData);
        setData(resultData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  const handleCityChange = (e: any) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    debouncedValue ? fetchWeatherData() : setData(undefined);
  }, [debouncedValue]);

  return (
    <div>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          {data && (
            <div>
              {data.cityName}, {data.country}
            </div>
          )}
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="end">
              <AccountCircle />
            </InputAdornment>
          }
          value={city}
          onChange={(e) => handleCityChange(e)}
        />
      </FormControl>

      {!data || isLoading ? (
        <div>
          <p>Clima: Loading</p>
          <p>Temperatura: Loading</p>
          <p>Máxima: Loading</p>
          <p>Mínima: Loading</p>
          <p>Umidade: Loading%</p>
          <p>Próximos dias:</p>
          <p>Max: Loading</p>
          <p>Min: Loading</p>
          <p>Amanhã: Loading</p>
          <p>Max: Loading</p>
          <p>Min:Loading </p>
          <p>Depois de amanhã: Loading</p>
          <p>Max: Loading</p>
          <p>Min: Loading</p>
        </div>
      ) : (
        <div>
          <p>Clima: {data.main}</p>
          <p>Temperatura: {data.temp}</p>
          <p>Máxima: {data.max_temp}</p>
          <p>Mínima: {data.min_temp}</p>
          <p>Umidade: {data.humidity}%</p>
          <p>Próximos dias:</p>
          <p>Max: {data.max_temp_tomorrow}</p>
          <p>Min: {data.min_temp_tomorrow}</p>
          <p>Amanhã: {data.main_tomorrow}</p>
          <p>Max: {data.max_temp_atomorrow}</p>
          <p>Min: {data.min_temp_atomorrow}</p>
          <p>Depois de amanhã: {data.main_atomorrow}</p>
          <img src={data.image} alt="" />
        </div>
      )}
    </div>
  );
}
