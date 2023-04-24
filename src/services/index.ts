import { bingService } from './bing/bing.service'
import { openCageService } from './open-cage/open-cage.service'
import { openWeatherService } from './open-weather/open-weather.service'
import { positionStack } from './position-stack/position-stack.service'

export const requests = {
    bing: bingService,
    openCage: openCageService,
    openWeather: openWeatherService,
    positionStack: positionStack,
}
