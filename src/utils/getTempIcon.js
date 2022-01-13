import atmosphereIcon from '../assets/atmosphere.svg'
import clearDayIcon from '../assets/clear-day.svg'
import clearNightIcon from '../assets/clear-night.svg'
import cloudsIcon from '../assets/clouds.svg'
import drizzleIcon from '../assets/drizzle.svg'
import rainIcon from '../assets/rain.svg'
import snowIcon from '../assets/snow.svg'
import thunderstormIcon from '../assets/thunderstorm.svg'

const tempIcons = {
    atmosphere: atmosphereIcon,
    clear: {
        day: clearDayIcon,
        night: clearNightIcon,
    },
    clouds: cloudsIcon,
    drizzle: drizzleIcon,
    rain: rainIcon,
    snow: snowIcon,
    thunderstorm: thunderstormIcon,
}

export const getTempIcon = (weatherId, hour = 0) => {
    if (weatherId === 800) {
        if (!hour) return tempIcons.clear.day
        return hour > 18 ? tempIcons.clear.night : tempIcons.clear.day
    }
    if (weatherId > 800) return tempIcons.clouds
    if (weatherId >= 200 && weatherId < 300) return tempIcons.thunderstorm
    if (weatherId >= 300 && weatherId < 500) return tempIcons.drizzle
    if (weatherId >= 500 && weatherId < 600) return tempIcons.rain
    if (weatherId >= 600 && weatherId < 700) return tempIcons.snow
    if (weatherId >= 700 && weatherId < 800) return tempIcons.atmosphere
}
