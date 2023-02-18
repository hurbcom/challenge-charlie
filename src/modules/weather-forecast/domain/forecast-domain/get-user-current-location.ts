import { INavigatorGeolocation } from '@/interfaces'

interface Params {
  navigator: Navigator
}

export async function getUserCurrentLocation({
  navigator,
}: Params): Promise<INavigatorGeolocation | null> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) resolve(null)

    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords

        resolve({ latitude, longitude })
      },
      () => resolve(null)
    )
  })
}
