import React, { useState } from "react";
import DisplayWeather from "../Display/DisplayWeather";
import "../Weather/weather.css";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
  });

  const APIKEY = "7ba73e0eb8efe773ed08bfd0627f07b8";

  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Digite sua cidade!");
    } else {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=22.815929&lon=-45.193279&APPID=${APIKEY}&exclude=minutely,hourly,alerts&lang=pt_br&units=metric`)
        .then((res) => res.json())
        .then((data) => data);
      setWeather({ data: data });
    }
  }


  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
  };

  return (
    <div className="weather">
      <form>
        <input
          type="text"
          placeholder="Digite sua cidade"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        <button className="pesquisa" onClick={(e) => weatherData(e)}>
          <i className="fab fa-searchengin"></i>
        </button>
      </form>

      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
