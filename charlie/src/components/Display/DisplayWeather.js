import React from "react";
import "../Display/displayweather.css";


function DisplayWeather(props) {
  const { weather, openCage } = props;
  console.log(openCage);

  const iconurl = `http://openweathermap.org/img/wn/${weather.cod != 404 ? weather.daily[0].weather[0].icon : null}.png`;

  return (
    <>
      {weather.cod != 404 ? (
        <div className="background-image" >
          <div className="localizacao">
            <i className="far fa-compass"></i>
            <p className="endereco">{(openCage.city ? openCage.city : openCage.town) + ", " + openCage.state + ", " + openCage.country}</p>
          </div>
          <div className="hoje">
            <div className="logo">
              <img className="imagem-clima" src={iconurl} alt="descrição de temperaturas" />
            </div>
            <div className="dados">
              <div>
                <p>HOJE</p>
                <p>{weather.current.temp}<sup>o</sup>C</p>
              </div>
              <div className="clima">
                <h4 className="status">{weather.current.weather[0].description}</h4>
                <p className="caracteristicas">Vento: {weather.current.wind_speed}km</p>
                <p className="caracteristicas">Humidade: {weather.current.humidity}%</p>
                <p className="caracteristicas">Pressão: {weather.current.pressure}hPa</p>
              </div>
            </div>
          </div>
          <div className="amanha">
            <div className="dados">
              <div className="temperatura">
                <p className="semana">AMANHÃ</p>
                <p className="semana">{weather.daily[0].temp.day}<sup>o</sup>C</p>
              </div>
            </div>
          </div>
          <div className="depois-amanhã">
            <div className="dados">
              <div className="temperatura">
                <p className="semana">DEPOIS DE AMANHÃ</p>
                <p className="semana">{weather.daily[1].temp.day}<sup>o</sup>C</p>
              </div>
            </div>
          </div>
        </div>

      ) : (
        <div className="maincard">
          <h2>{weather.message}</h2>
        </div>
      )}
    </>
  );
}

export default DisplayWeather;
