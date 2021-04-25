import React, { useEffect, useState } from 'react'
import getPosition from '../functions/getPosition'

export const App: React.FC = () => {
  const [globalContext, setGlobalContext] = useState({})

  getPosition()

  useEffect(() => {
    setTimeout(() => setGlobalContext(window.dataContext), 5000)
  }, [])

  console.log('context', globalContext)
  return (
    <>
      <figure>
        <img
          src={'https://www.bing.com/th?id=OHR.MossyCanyon_ROW7441967824_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'}
        />
        <button>HELLO</button>
      </figure>
    </>
  )
}

export default App
