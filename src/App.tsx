import { useGetCurrentPosition } from './resources/hooks/useGetCurrentPosition'
import style from './app.module.scss'
import image from './assets/images/exemplo.jpg'
import { useGetGeoCode } from './resources/hooks/useGetGeoCode'

export const App = () => {
  const { pos, error } = useGetCurrentPosition()

  if (error) {
    return <h1>Seu navegador não deu suporte a Geolocalização {error}</h1>
  }

  const { address } = useGetGeoCode((pos.latitude).toString(), (pos.longitude).toString())

  console.log(address)
  return (
    <>
       <h2>Cidade: {address.city}</h2>
       <h1 className={style.teste}>Hello world - {process.env.NODE_ENV} - {process.env.name}</h1>
        {pos.latitude} {pos.longitude}
       <img src={image} alt="Imagem de exemplo" />
    </>
  )
}
