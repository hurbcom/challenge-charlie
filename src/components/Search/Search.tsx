import React, { useState } from "react";
import { fetchGeocoding, fetchWeather } from "../../services/fetchService";
import { useStore } from "../../store/store";

const Search = () => {
  const setLocation = useStore((state) => state.setLocation);
  const setForecast = useStore((state) => state.setForecast);
  const setTheme = useStore((state) => state.setGlobalTheme);
  const setLoading = useStore((state) => state.setLoading);
  const setError = useStore((state) => state.setError);
  const setErrorCode = useStore((state) => state.setErrorCode);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInformationSize = (data: any) => {
    interface Switcher {
      [key: string]: () => { city: string; state: string };
    }

    if (data.address_components.length > 2) {
      return {
        city: data.address_components[0].long_name,
        state: data.address_components.at(-2).long_name,
      };
    } else {
      const length = `case${data.address_components.length}`;
      const switcher: Switcher = {
        case1() {
          return { city: data.address_components[0].long_name, state: "" };
        },
        case2() {
          return {
            city: data.address_components[0].long_name,
            state: data.address_components[1].long_name,
          };
        },
      };
      return switcher[length]();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading();
    fetchGeocoding(searchTerm)
      .then((data) => {
        setLocation(handleInformationSize(data));
        fetchWeather(data.geometry.location.lat, data.geometry.location.lng)
          .then((data) => {
            setForecast(data);
            setTheme(data.today.temp);
            setLoading();
          })
          .catch(() => {
            setLoading();
            setError();
            setErrorCode({ erro: "Erro na previsão do tempo", mensagem: "" });
          });
      })
      .catch((error) => {
        setLoading();
        setError();
        setErrorCode({ erro: "Local não encontrado", mensagem: "" });
      });
  };

  return (
    <div className="bg-white w-full md:rounded-t-xl h-[10vh] md:h-[5vh] lg:h-[10vh] flex justify-center items-center">
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
          className="w-full bg-gray-50 text-[5vw] font-montserrat md:text-xl pl-3 py-1  rounded-lg md:rounded-md overflow-hidden placeholder:text-center placeholder:pr-3 placeholder:text-gray-200"
        />
      </form>
    </div>
  );
};

export default Search;
