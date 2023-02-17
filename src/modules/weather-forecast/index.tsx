import {
  BackgroundImageApiClient,
  ForecastApiClient,
  GeolocationApiClient,
} from '@/infrastructure'
import { ForecastDomain } from './domain/forecast-domain'
import { BackgroundImageDomain } from './domain/background-domain'
import { WeatherForecastView } from './view/forecast-view'
import { useForecastViewModel } from './view-model/forecast-view-model'
import { BackgroundImageView } from './view/background-image-view'
import { useBackgroundImageViewModel } from './view-model/background-image-view-model'

const forecastApi = new ForecastApiClient()
const geoLocationApi = new GeolocationApiClient()
const imageApi = new BackgroundImageApiClient()

const forecastDomain = new ForecastDomain({ forecastApi, geoLocationApi })
const backgroundImageDomain = new BackgroundImageDomain(imageApi)

const WeatherForecastCard = () => {
  const viewModel = useForecastViewModel({ domain: forecastDomain })
  return <WeatherForecastView viewModel={viewModel} />
}

const WeatherBackgroundImage = () => {
  const viewModel = useBackgroundImageViewModel({
    domain: backgroundImageDomain,
  })
  return <BackgroundImageView viewModel={viewModel} />
}

export const WeatherForecast = () => {
  return (
    <div>
      <WeatherBackgroundImage />
      <WeatherForecastCard />
    </div>
  )
}
