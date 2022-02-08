import React from 'react'
import { Image } from '../../services'
import { StyledMain } from './Main.styles'

const Main = ({ children }) => {
  const [imageBackground, setImageBackground] = React.useState()
  React.useEffect(() => {
    const init = async () => {
      const image = await Image.getFromBing()
      setImageBackground(image)
    }
    init()
  }, [])

  return <StyledMain imageBackground={imageBackground}>{children}</StyledMain>
}

export default Main
