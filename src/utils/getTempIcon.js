import atmosphereIcon from '../assets/atmosphere.svg'
import clearDayIcon from '../assets/clear-day.svg'
import clearNightIcon from '../assets/clear-night.svg'
import cloudsIcon from '../assets/clouds.svg'
import drizzleIcon from '../assets/drizzle.svg'
import rainIcon from '../assets/rain.svg'
import snowIcon from '../assets/snow.svg'
import thunderstormIcon from '../assets/thunderstorm.svg'

export const getTempIcon = (weatherId, hour = 0) => {
    if (weatherId === 800) {
        if (!hour) return clearDayIcon
        return hour >= 18 ? clearNightIcon : clearDayIcon
    }
    if (weatherId > 800) return cloudsIcon
    if (weatherId >= 200 && weatherId < 300) return thunderstormIcon
    if (weatherId >= 300 && weatherId < 500) return drizzleIcon
    if (weatherId >= 500 && weatherId < 600) return rainIcon
    if (weatherId >= 600 && weatherId < 700) return snowIcon
    if (weatherId >= 700 && weatherId < 800) return atmosphereIcon
}
