/**
 * This file aims to unite all the application's service files.
 * This is done to make it easier to use, since when using a service,
 * the ide's autocomplete will help.
 *
 * In addition, keeping the api isolated from the rest of the application helps in
 * future separation of projects, since the same requests sdk can be used for both
 * the web and mobile application.
 */

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
