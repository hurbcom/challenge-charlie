import { PropsWithChildren, useEffect, useState } from 'react'
import { GetLocationByCoordinatesParams } from '../../../../services/openCage/interfaces/GetLocationByCoordinatesParams'
import useGetLocationByCoordinates from '../../../../services/openCage/queries/useGetLocationByCoordinates'
import LayoutContext from '../../contexts/LayoutContext'

type LayoutProviderProps = {}

export default function LayoutProvider(props: PropsWithChildren<LayoutProviderProps>) {
  const { children } = props
  const [location, setLocation] = useState<GetLocationByCoordinatesParams>()
  const [formattedAddress, setFormattedAddress] = useState<string>('')
  useGetLocationByCoordinates(location, {
    onSuccess: data => {
      setFormattedAddress(`${data.components.city}, ${data.components.state}`)
    }
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location => {
      setLocation({
        lat: location.coords.latitude,
        long: location.coords.longitude
      })
    })
  }, [])
  return (
    <LayoutContext.Provider
      value={{
        address: [formattedAddress, setFormattedAddress],
        location: location
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
