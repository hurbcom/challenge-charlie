import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import useGetLocationByCoordinates from '../../../../services/openCage/queries/useGetLocationByCoordinates'
import { GetLocationByCoordinatesParams } from '../../../../services/openCage/interfaces/GetLocationByCoordinatesParams'
import { ReactComponent as IconCompass } from '../../../../assets/icons/compass.svg'

type UserLocationProps = {}

const UserLocationRoot = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  backgroundColor: 'rgba(242,237,234,0.8)',
  padding: '20px 15px'
})

const IconCompassStyled = styled(IconCompass)({
  color: '#7e7a79',
  width: '60px',
  height: '60px'
})

const InputStyled = styled('input')({
  fontSize: '30px',
  width: '100%',
  color: '#7e7a79',
  backgroundColor: 'transparent',
  border: 0,
  outline: 0
})

export default function UserLocation(props: UserLocationProps) {
  const [location, setLocation] = useState<GetLocationByCoordinatesParams>()
  const [formattedAddress, setFormattedAddress] = useState<string>()
  const { isLoading } = useGetLocationByCoordinates(location, {
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
    <UserLocationRoot>
      <IconCompassStyled />
      <InputStyled
        type="text"
        value={formattedAddress || ''}
        placeholder={isLoading ? 'Carregando localização' : 'Digite sua cidade e estado'}
        onChange={event => setFormattedAddress(event.target.value)}
      />
    </UserLocationRoot>
  )
}
