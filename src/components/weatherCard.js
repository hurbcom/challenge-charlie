import React from 'react'
import translate from '../translate-condition'

const RenderWeatherToday = (props) => {
  const data = props.data

  if (data.location) {
    return (
      <div>
        <p>HOJE</p>
        <p>{data.item.condition.temp}</p>
        <p>{translate[data.item.condition.code]}</p>
        <p>Vento: NO {data.wind.speed}km/h</p>
        <p>Humidade:{data.atmosphere.humidity}</p>
        <p>Pressão:{data.atmosphere.pressure}</p>
      </div>
    )
  } else {
    return (
      <div className='weather-empty' />
    )
  }
}

const RenderWeatherTomorrow = (props) => {
  const data = props.data

  if (data.location) {
    return (
      <div>
        <p>AMANHÃ</p>
        <p>{data.item.forecast[1].low}</p>
      </div>
    )
  } else {
    return (
        <div className='weather-empty' />
    )
  }
}

const RenderWeatherAfterTomorrow = (props) => {
  const data = props.data

  if (data.location) {
    return (
      <div>
        <p>DEPOIS DE AMANHÃ</p>
        <p>{data.item.forecast[2].low}</p>
      </div>
    )
  } else {
    return (
      <div className='weather-empty' />
    )
  }
}

export default (props) =>
  <section>
    <RenderWeatherToday data={props.data} />
    <RenderWeatherTomorrow data={props.data} />
    <RenderWeatherAfterTomorrow data={props.data} />
  </section>
