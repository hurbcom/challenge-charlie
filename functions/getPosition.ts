import getLocationName from './getLocationName'
import getWeather from './getWeather'

const getPosition = () => {
  const errorGetPosition = () => {
    console.debug('Sorry, no position available.')
  }
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getLocationName(position?.coords?.latitude, position?.coords?.longitude)
          .then((resultLocationName) => getWeather(resultLocationName))
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
