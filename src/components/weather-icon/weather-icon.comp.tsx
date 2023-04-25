import { ReactComponent as SunIcon } from '@assets/icons/sun.svg'
import { ReactComponent as Cloudscon } from '@assets/icons/clouds.svg'
import { ReactComponent as DrizzleIcon } from '@assets/icons/drizzle.svg'
import { ReactComponent as WindIcon } from '@assets/icons/wind.svg'
import { ReactComponent as MistIscon } from '@assets/icons/mist.svg'
import { ReactComponent as RainIcon } from '@assets/icons/rain.svg'
import { ReactComponent as SmokeIcon } from '@assets/icons/smoke.svg'
import { ReactComponent as SnowIcon } from '@assets/icons/snow.svg'
import { ReactComponent as ThunderstormIcon } from '@assets/icons/thunderstorm.svg'
import { WeatherName } from '@services/open-weather/open-weather.service.types'

interface WeatherIconProps {
    weather: WeatherName
    color: string
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ weather, color }) => {
    switch (weather) {
        case 'Thunderstorm':
        case 'Tornado':
            return (
                <ThunderstormIcon
                    width={'100%'}
                    height="100%"
                    fill={color}
                    data-testid="thunderstorm-icon"
                />
            )
        case 'Drizzle':
            return (
                <DrizzleIcon
                    width={'100%'}
                    height="100%"
                    fill={color}
                    data-testid="drizzle-icon"
                />
            )
        case 'Rain':
            return (
                <RainIcon
                    width={'100%'}
                    height="100%"
                    fill={color}
                    data-testid="rain-icon"
                />
            )
        case 'Snow':
            return (
                <SnowIcon
                    width={'100%'}
                    height="100%"
                    fill={color}
                    data-testid="snow-icon"
                />
            )
        case 'Mist':
        case 'Haze':
        case 'Fog':
            return (
                <MistIscon
                    width={'100%'}
                    height="100%"
                    fill={color}
                    data-testid="mist-icon"
                />
            )
        case 'Smoke':
            return (
                <SmokeIcon
                    width={'100%'}
                    height="100%"
                    fill={color}
                    data-testid="smoke-icon"
                />
            )
        case 'Dust':
        case 'Sand':
        case 'Ash':
        case 'Squall':
            return (
                <WindIcon
                    width={'100%'}
                    height="100%"
                    fill={color}
                    data-testid="wind-icon"
                />
            )
        case 'Clouds':
            return (
                <Cloudscon
                    width={'100%'}
                    height="100%"
                    fill={color}
                    data-testid="clouds-icon"
                />
            )

        default:
            return (
                <SunIcon
                    width={'100%'}
                    height="100%"
                    fill={color}
                    data-testid="sun-icon"
                />
            )
    }
}
