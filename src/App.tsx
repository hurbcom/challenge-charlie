import { useGetCurrentPositionByReverseCode } from './resources/hooks/useGetCurrentPositionByReverseCode'
import { useOpenCageData } from './resources/hooks/useOpenCageData'
import { useEffect, useState } from 'react'
import { getWeatherFromCity } from './resources/services/openWeather'
import style from './app.module.scss'
import image from './assets/images/exemplo.jpg'

export const App = () => {
  const { pos, error } = useGetCurrentPositionByReverseCode()
  const [temp, setTemp] = useState('')
  const [city, setCity] = useState('')

  if (error) {
    return <h1>Seu navegador não deu suporte a Geolocalização {error}</h1>
  }

  const { address } = useOpenCageData((pos.latitude).toString(), (pos.longitude).toString())

  function newOpenWeather() {
    getWeatherFromCity(city)
      .then((r) => setTemp(r.data.main.temp))
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getWeatherFromCity(address.city)
      .then((r) => setTemp(r.data.main.temp))
      .catch(e => console.log(e))
  }, [address.city])

  return (
    <>
       <h2>Cidade: {city || address.city}</h2>
       <h2>Temperatura: {(+temp / 10).toFixed(2)}</h2>
       <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
       <button onClick={newOpenWeather}>Pesquisar</button>
       <h1 className={style.teste}>Ambiente - {process.env.NODE_ENV} - {process.env.name}</h1>
        Lat: {pos.latitude} Long: {pos.longitude}
       <img src={image} alt="Imagem de exemplo" />
    </>
  )
}
