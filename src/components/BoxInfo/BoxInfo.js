import React from 'react';

const BoxInfo = (props) => {
  return(
    <>
      { 
        !!props.data && 
        !!props.data.weather &&
        !!props.data.weather.length &&
        !!props.day &&
        props.day === 'Hoje'
        ?
        <div>
          <p>{props.day}</p>
          <p onClick={props.onClick}><b>
            {
              props.unit == 'metric'
              ?
              `${props.data.temp} °C`
              :
              `${(props.data.temp * 1.8) + 32} °F`
            }
          </b></p>
          {
            <h3>
              {
                props.data.weather.map((item, index) => {
                  if(index < (props.data.weather.length - 1)){
                    return `${item.description} / `
                  } else{
                    return `${item.description}`
                  }
                })
              }
            </h3>
          }
          <p>Vento: {`${props.data.wind.deg}° / ${props.data.wind.speed}km/h`}</p>
          <p>Umidade: {`${props.data.humidity}%`}</p>
          <p>Pressão: {`${props.data.pressure}hPA`}</p>
        </div>
        :
        !!props.data && 
        !!props.data.temp &&
        !!props.day &&
        <div>
          <p>{props.day}</p>
          <p onClick={props.onClick}><b>
            {
              props.unit == 'metric'
              ?
              `${props.data.temp} °C`
              :
              `${(props.data.temp * 1.8) + 32} °F`
            }
          </b></p>
        </div>
      }
    </>
  )
}

export default BoxInfo;