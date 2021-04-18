import React from "react";
import "../Display/displayweather.css";


function DisplayWeather(props) {
  const { data } = props;
  const iconurl = `http://openweathermap.org/img/wn/${data.cod != 404 ? data.daily[0].weather[0].icon : null}.png`;

  return (
    <div className="displayweather">
      {data.cod != 404 ? (
        <React.Fragment>
          <div>
            <div className="background-image" >
              <div className="localizacao">
                <i className="far fa-compass"></i>
                <p>{data.name}</p>
                {/* {data.sys.country} */}
              </div>
              <div className="hoje">
                <div className="logo">
                    <img className="imagem-clima"src={iconurl} alt="descrição de temperaturas" />
                </div>
                <div className="dados">
                    <div className="temperatura">
                      <p>HOJE</p>
                      <p>{data.current.temp}<sup>o</sup>C</p>
                    </div>
                    <div className="clima">
                      <h4 className="status">{ data.current.weather[0].description}</h4>
                        <p className="caracteristicas">Vento: {data.current.wind_speed}km</p>
                        <p className="caracteristicas">Humidade: {data.current.humidity}%</p>
                        <p className="caracteristicas">Pressão: {data.current.pressure}hPa</p>
                    </div>
                </div>
            </div>
            <div className="amanha">
              <div className="dados">
                <div className="temperatura">
                  <p className="semana">AMANHÃ</p>
                   <p className="semana">{data.daily[0].temp.day}<sup>o</sup>C</p>
                </div>
              </div>
            </div>
            <div className="depois-amanhã">
              <div className="dados">
                <div className="temperatura">
                  <p className="semana">DEPOIS DE AMANHÃ</p>
                    <p className="semana">{data.daily[1].temp.day}<sup>o</sup>C</p> 
                </div>
              </div>
            </div>
           </div>
           </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
