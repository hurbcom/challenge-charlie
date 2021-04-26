import React, { useEffect, useState } from 'react'
import getPosition from '../../../functions/getPosition'
import getWeather from '../../../functions/getWeather'
import { GlobalContextType } from '../../common/types/globalContext'
import Input from '../../components/Input'
import Today from '../../components/Today'
import OtherDays from '../../components/OtherDays'
import { AppContainerMask, AppContainerWallpaper, AppContainerWrapper } from './AppContainer.style'

export const AppContainer: React.FC = () => {
  const [nameInput, setNameInput] = useState('')
  const [globalContext, setGlobalContext] = useState({} as GlobalContextType)

  const handleClick = () => {
    console.log('clicou')
    getWeather(nameInput)

    setTimeout(() => {
      setGlobalContext(window.dataContext)
    }, 5000)
  }

  const handleChange = (event: any) => {
    console.log('change', event.target.value)
    setNameInput(event.target.value)
  }

  useEffect(() => {
    getPosition()
    setTimeout(() => {
      if (window.dataContext?.info?.name) {
        setNameInput(window.dataContext?.info?.name)
      }
      setGlobalContext(window.dataContext)
    }, 5000)
  }, [])

  return (
    <AppContainerWallpaper>
      <AppContainerMask>
        <AppContainerWrapper>
          <Input nameInput={nameInput} handleClick={handleClick} handleChange={handleChange} />
          {globalContext && globalContext.weatherPerDay && (
            <>
              <Today contextToday={globalContext.weatherPerDay[0]} />
              <OtherDays contextOtherDays={globalContext.weatherPerDay[1]} />
              <OtherDays contextOtherDays={globalContext.weatherPerDay[2]} />
            </>
          )}
        </AppContainerWrapper>
      </AppContainerMask>
    </AppContainerWallpaper>
  )
}

export default AppContainer
