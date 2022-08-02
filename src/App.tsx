import React from 'react'
import { Background } from './Components/Background'
import { Weather } from './Components/Weather'

export const App = () => {
  return (
    <Background>
        <Weather />
    </Background>
  )
}

export default App
