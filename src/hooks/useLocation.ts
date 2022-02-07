import React from 'react'
import { UserPosition, Geocoding } from '../services'

type StateType = {
  loading?: boolean
  error?: boolean
  errorMessage?: string
  data?: { city: string; state: string }
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
      const location = await Geocoding.reverse(
        data.coords.latitude,
        data.coords.longitude
      )
      if (location !== null) {
        setState({ data: { ...location } })
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
