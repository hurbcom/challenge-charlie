import React, { useState } from "react";
import { fetchGeocoding, fetchWeather } from "../../services/fetchService";
import { useStore } from "../../store/store";

const Search = () => {
  const setLocation = useStore((state) => state.setLocation);
  const setForecast = useStore((state) => state.setForecast);
  const setTheme = useStore((state) => state.setGlobalTheme);
  const setLoading = useStore((state) => state.setLoading);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInformationSize = (data: any) => {
    const length = data.address_components.length;
    switch (length) {
      case 1:
        return {
          city: data.address_components[0].long_name,
          state: "",
        };
      case 2:
        return {
          city: data.address_components[0].long_name,
          state: data.address_components[1].long_name,
        };

      default:
        return {
          city: data.address_components[0].long_name,
          state: data.address_components.at(-2).long_name,
        };
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading();
    fetchGeocoding(searchTerm)
      .then((data) => {
        console.log(data.address_components.length);
        setLocation(handleInformationSize(data));
        fetchWeather(data.geometry.location.lat, data.geometry.location.lng)
          .then((data) => {
            setForecast(data);
            setTheme(data.today.temp);
            setLoading();
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
          className=" location-input bg-gray-50 font-montserrat rounded-md w-full text-xl pl-3 py-1 overflow-hidden placeholder:text-center placeholder:pr-3"
        />
      </form>
    </div>
  );
};

export default Search;
