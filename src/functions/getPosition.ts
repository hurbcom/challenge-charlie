import getLocationName from './getLocationName'
import getWeather from './getWeather'

declare global {
  interface Window {
    dataContext: object
  }
}

const getPosition = () => {
  window.dataContext = window.dataContext || {}

  const errorGetPosition = () => {
    console.debug('Sorry, no position available.')
  }
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getLocationName(position?.coords?.latitude, position?.coords?.longitude)
          .then((resultLocationName) => {
            getWeather(resultLocationName).then((dataResult) => {
              window.dataContext = dataResult
            })
          })
          .catch(() => {
            console.debug('[Error getPosition function]')
          })
      },
      errorGetPosition,
      { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true }
    )
  } else {
    console.debug("I'm sorry, but geolocation services are not supported by your browser.")
  }
}
export default getPosition
