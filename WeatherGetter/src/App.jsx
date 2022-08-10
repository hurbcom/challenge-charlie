import { useEffect, useState } from 'react';

import { StyledApp, StyledContainer } from './style.js'

import { Header, TodayInfo, FutureInfo } from './components'

import { WeatherContextProvider } from './contexts/WeatherContext'
import { useApi } from './hooks/useApi'

function App() {
  const { getBackground } = useApi()
  const [ background, setBackground] = useState('')
  
  //Estado que controla qual o tipo de temperatura está sendo exibido (°C ou °F)
  const [tipoTemperatura, setTipoTemperatura] = useState(true);

  useEffect(() => {
      async function loadBg(){
        await getBackground().then(
          result => setBackground(result)
        )
      };

      loadBg()
    }, [])

  //Função para trocar o tipo de temperatura exibido quando as temperaturas são clicadas.
  function handleAlteraTipoTemp(){
    setTipoTemperatura((tipoTemperatura)=>{
      return !tipoTemperatura
    })
  }

  console.log('rerendering')
  return (
    
      <StyledApp data-testid="bg" bg={background}>
        <StyledContainer>
        <WeatherContextProvider>
            <Header/>
            <TodayInfo tipoTemperatura = {tipoTemperatura} alteraTipoTemp = {handleAlteraTipoTemp}/>
            <FutureInfo tipoTemperatura = {tipoTemperatura} alteraTipoTemp = {handleAlteraTipoTemp}/>
          </WeatherContextProvider>
        </StyledContainer>
      </StyledApp>
    
  )
}

export default App
