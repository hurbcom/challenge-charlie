import React, { useState } from "react";
import { fetchGeocoding, fetchWeather } from "../../services/fetchService";
import { useStore } from "../../store/store";

const Search = () => {
  const setLocation = useStore((state) => state.setLocation);
  const setForecast = useStore((state) => state.setForecast);
  const setTheme = useStore((state) => state.setGlobalTheme);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchGeocoding(searchTerm)
      .then((data) => {
        setLocation({
          city: data.address_components[0].long_name,
          state: data.address_components[1].long_name,
        });
        fetchWeather(data.geometry.location.lat, data.geometry.location.lng)
          .then((data) => {
            setForecast(data);
            setTheme(data.today.temp);
            setInputValue("");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch(console.log);
  };

  return (
    <div className="bg-white w-full rounded-t-xl h-[10vh] flex justify-center items-center">
      <form className="w-2/3" onSubmit={handleSubmit}>
        <input
          onChange={(event) => {
            setSearchTerm(event.target.value.replace(/\s+/g, "+"));
            setInputValue(event.target.value);
          }}
          value={inputValue}
          placeholder="Insira uma localização"
          required
          type="text"
          className="bg-gray-50 font-montserrat rounded-md w-full text-xl pl-3 py-1 overflow-hidden placeholder:text-center placeholder:pr-3"
        />
      </form>
    </div>
  );
};

export default Search;
