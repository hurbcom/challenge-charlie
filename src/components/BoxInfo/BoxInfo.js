import React from 'react';

const BoxInfo = (props) => {
  const data = props.data;
  const day = props.day;

  return(
    <div>
      <p>{day}</p>
      <p><b>{data.temp}°C</b></p>
      {
        <h3>
          {
            data.weather.map((item, index) => {
              if(index < (data.weather.length - 1)){
                return `${item.description} / `
              } else{
                return `${item.description}`
              }
            })
          }
        </h3>
      }
      <p>Vento: {`${data.wind.deg}° / ${data.wind.speed}km/h`}</p>
      <p>Umidade: {`${data.humidity}%`}</p>
      <p>Pressão: {`${data.pressure}hPA`}</p>
    </div>
  )
}

export default BoxInfo;