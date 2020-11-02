import { useState, useEffect } from 'react'
import BingService from 'services/bingService'
import CacheService from 'services/cacheService'

import * as S from './styles'

interface IBackground {
  children: React.ReactNode
}

const Background = ({ children }: IBackground) => {
  const [bgImage, setBgImage] = useState('#06092b')

  const getBackgroundImage = async () => {
    const cache = await CacheService.getCacheData('background')
    if (cache) {
      console.log(cache)
      setBgImage(cache)
      return
    }
    const background = await BingService.getImageFromBing()
    CacheService.setCacheData('background', background, 3, 'HOURS')
    setBgImage(background)
  }

  useEffect(() => {
    getBackgroundImage()
  }, [])

  return <S.Wrapper bg={bgImage}>{children}</S.Wrapper>
}

export default Background
