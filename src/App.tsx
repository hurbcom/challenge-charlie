import style from './app.module.scss'
import image from './assets/images/exemplo.jpg'

export const App = () => {
  return (
    <>
       <h1 className={style.teste}>Hello World</h1>
       <img src={image} alt="Imagem de exemplo" />
    </>
  )
}
