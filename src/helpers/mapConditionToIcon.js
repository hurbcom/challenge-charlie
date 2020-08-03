import React from 'react'

import ClearDay from 'icons/clear_day.svg'
import ClearNight from 'icons/clear_night.svg'
import Clouds from 'icons/clouds.svg'
import Drizzle from 'icons/drizzle.svg'
import Rain from 'icons/rain.svg'
import Snow from 'icons/snow.svg'
import Thunderstorm from 'icons/thunderstorm.svg'

export default function mapConditionToIcon(id, sunRise, sunSet) {
  switch (id) {
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232: {
      return <Thunderstorm data-testid='thunderstorm-icon' />
    }

    case 300:
    case 301:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321: {
      return <Drizzle data-testid='drizzle-icon' />
    }

    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 511:
    case 520:
    case 521:
    case 522:
    case 531: {
      return <Rain data-testid='rain-icon' />
    }

    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622: {
      return <Snow data-testid='snow-icon' />
    }

    case 801:
    case 802:
    case 803:
    case 804: {
      return <Clouds data-testid='clouds-icon' />
    }

    default: {
      const hour = new Date().getHours()
      const sunRiseInHours = new Date(sunRise).getHours()
      const sunSetInHours = new Date(sunSet).getHours() + 12

      const isNightTime =
        (hour >= sunSetInHours && hour <= 24) || (hour >= 0 && hour <= sunRiseInHours)

      return isNightTime ? (
        <ClearNight data-testid='clear-night-icon' />
      ) : (
        <ClearDay data-testid='clear-day-icon' />
      )
    }
  }
}
