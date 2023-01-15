import styled from '@emotion/styled'
import useGetLocationByCoordinates from '../../../../services/openCage/queries/useGetLocationByCoordinates'
import { ReactComponent as IconCompass } from '../../../../assets/icons/compass.svg'
import useLayoutContext from '../../../layout/hooks/useLayoutContext'
import { useEffect, useState } from 'react'

type UserLocationProps = {}

const UserLocationRoot = styled('div')({
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
  const {
    address: [formattedAddress, setFormattedAddress],
    location
  } = useLayoutContext()
  const [inputValue, setInputValue] = useState<string>('')
  const { isLoading } = useGetLocationByCoordinates(location)

  useEffect(() => {
    if (formattedAddress) {
      setInputValue(formattedAddress)
    }
  }, [formattedAddress])

  return (
    <UserLocationRoot>
      <IconCompassStyled />
      <InputStyled
        type="text"
        value={inputValue}
        placeholder={isLoading ? 'Carregando localização' : 'Digite sua cidade e estado'}
        onChange={event => setInputValue(event.target.value)}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            setFormattedAddress(inputValue)
          }
        }}
      />
    </UserLocationRoot>
  )
}
