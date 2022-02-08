import React from 'react'
import { UserPosition, Geocoding } from '../services'

type StateType = {
  loading?: boolean
  error?: boolean
  errorMessage?: string
  data?: { city: string; state: string; latitude?: number; longitude?: number }
}

export const useLocation = () => {
  const [state, setState] = React.useReducer(
    (oldState: StateType, newState: StateType) => ({
      ...oldState,
      ...newState,
    }),
    {
      data: { city: '', state: '' },
      loading: true,
      error: false,
      errorMessage: '',
    }
  )
  React.useEffect(() => {
    UserPosition.getUserPosition(successPositionCallback, errorPositionCallback)
  }, [])

  const successPositionCallback = async (data: {
    coords: { latitude: number; longitude: number }
  }) => {
    try {
      const { longitude, latitude } = data.coords
      const location = await Geocoding.reverse(latitude, longitude)
      if (location !== null) {
        setState({ data: { ...location, latitude, longitude } })
      }
    } catch (e: any) {
      setState({ loading: false, error: true, errorMessage: e.message })
    }
  }
  const errorPositionCallback = (err: { code: number; message: string }) => {
    setState({ loading: false, error: true, errorMessage: err.message })
  }

  return state
}
