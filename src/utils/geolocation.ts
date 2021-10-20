import axios from 'axios'
import { setCookie, parseCookies } from 'nookies'

const api = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org/'
})

interface BasicLocalization {
  city: string
  country: string
  state: string
  latitude: string
  longitude: string
}

export const hasPermissionLocation = async (): Promise<boolean> => {
  const result = await navigator.permissions.query({ name: 'geolocation' })
  return result.state !== 'denied'
}

const getLocalization = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  )
}

export const getLatLong = async (): Promise<{
  longitude: number
  latitude: number
}> => {
  const result = await getLocalization()
  return {
    longitude: result.coords.longitude,
    latitude: result.coords.latitude
  }
}

export const getDataLocation = async (): Promise<BasicLocalization> => {
  try {
    const result = await getLatLong()
    const { data } = await api.get<any>('reverse', {
      params: {
        lat: result.latitude,
        lon: result.longitude,
        format: 'json'
      }
    })

    return {
      city: data.address.town,
      country: data.address.country,
      state: data.address.state,
      latitude: result.latitude.toString(),
      longitude: result.longitude.toString()
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

const getInfoCookie = (key: string) => {
  const cookies = parseCookies(undefined)
  return cookies[key]
}

export const findLocalization = async (): Promise<BasicLocalization> => {
  const keyLocalization = 'basiclocation'
  if (!hasPermissionLocation()) {
    return null
  }
  if (!getInfoCookie(keyLocalization)) {
    const basicLocation = await getDataLocation()
    if (!basicLocation) {
      return
    }
    setCookie(undefined, keyLocalization, JSON.stringify(basicLocation), {
      maxAge: 24 * 60 * 60, // hours * minutes * seconds
      path: '/'
    })
  }

  return JSON.parse(getInfoCookie(keyLocalization))
}
