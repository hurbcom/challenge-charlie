import React, { useEffect, useState } from 'react'
import { getBackgroundImageURL } from '../../Core/services/bing'

interface Props {
  children: React.ReactNode;
}

export const Background: React.FC<Props> = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState('')

  useEffect(() => {
    async function getBackgroundImage () {
      const backgroundImageData = await getBackgroundImageURL()
      setBackgroundImage(backgroundImageData)
    }
    getBackgroundImage()
  }, [])

  return (
    <div
      className='h-screen w-screen bg-white bg-cover bg-center flex justify-center items-center'
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {children}
    </div>
  )
}
