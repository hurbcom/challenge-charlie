import { zonedTimeToUtc, utcToZonedTime, formatInTimeZone } from 'date-fns-tz';

import { ReactComponent as SunIcon } from '../../presentation/assets/sun.svg'
import { ReactComponent as CloudsIcon } from '../../presentation/assets/clouds.svg'
import { ReactComponent as SnowIcon } from '../../presentation/assets/snowing.svg'
import { ReactComponent as MoonIcon } from '../../presentation/assets/moon.svg'
import { ReactComponent as RainIcon } from '../../presentation/assets/raining.svg'
import { ReactComponent as ThunderstormIcon } from '../../presentation/assets/thunderstorm.svg'
import { ReactComponent as DrizzleIcon } from '../../presentation/assets/drizzle.svg'
import { ReactComponent as OthersIcon } from '../../presentation/assets/others.svg'

export const getIcon = (weatherId: number, timezone: string) => {
    // console.log('timezone', timezone)
    const date = new Date()
    //.toLocaleTimeString('en-US', { timeZone: timezone})
    // console.log('date', formatInTimeZone(date, timezone, "HH"))
    
    const dateTest = new Date();
    const hour = dateTest.getHours();
    // console.log('hour', hour)

    if(weatherId >= 200 && weatherId < 300) return ThunderstormIcon;
    if(weatherId >= 300 && weatherId < 500) return DrizzleIcon;
    if(weatherId >= 500 && weatherId < 600) return RainIcon;
    if(weatherId >= 600 && weatherId < 800) return SnowIcon;
    if(weatherId === 800) return hour <= 18 && hour > 5 ? SunIcon : MoonIcon;
    if(weatherId >= 800 && weatherId < 805) return CloudsIcon;

    return OthersIcon;
}