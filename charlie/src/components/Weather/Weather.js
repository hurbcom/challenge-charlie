import React, { useState } from "react";
import DisplayWeather from "../Display/DisplayWeather";
import "../Weather/weather.css";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [openCage, setOpenCage] = useState([]);
  const [form, setForm] = useState({
    city: "",
  });

  async function weatherData(e) {
    e.preventDefault();

    if (form.city == "") return alert("Digite sua cidade!");

    const openCageKey = 'c63386b4f77e46de817bdf94f552cddf';
    const openCageData = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${form.city}&key=${openCageKey}`)
      .then((res) => res.json())
      .then((openCageData) => openCageData);
    setOpenCage({ data: openCageData });

    if (!openCageData.results.length) return alert("Cidade não encontrada!");

    const openWeatherKey = "7ba73e0eb8efe773ed08bfd0627f07b8";
    const openWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${openCageData.results[0].geometry.lat}&lon=${openCageData.results[0].geometry.lng}&APIKEY=${openWeatherKey}&exclude=minutely,hourly,alerts&lang=pt_br&units=metric`)
      .then((res) => res.json())
      .then((openWeatheData) => openWeatheData);
    setWeather({ data: openWeatherData });
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
  };

  return (
    <>
      <div className="weather">
        <form>
          <input className="consulta"
            type="text"
            placeholder="Digite sua cidade"
            name="city"
            onChange={(e) => handleChange(e)}
          />

          <button className="pesquisa" onClick={(e) => weatherData(e)}>
            <i className="fas fa-search"></i>
          </button>
        </form>

        {weather.data != undefined ? (
          <DisplayWeather weather={weather.data} openCage={openCage.data.results[0].components} />
        ) : null}
      </div>
    </>
  );
}

export default Weather;
