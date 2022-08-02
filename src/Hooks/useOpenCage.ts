import { useEffect, useState } from 'react'
import { OpenCageService } from '../Core/services/openCage'
import { useCoordinates } from './useCoordinates'

export const useOpenCage = () => {
  const [loading, setLoading] = useState(false)
  const [locality, setLocality] = useState<any>({})
  const { coordinates } = useCoordinates()

  const fetchLocality = () => {
    setLoading(true)
    return OpenCageService.getLocality(coordinates)
      .then(setLocality)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (coordinates) {
      fetchLocality()
    }
  }, [coordinates])

  return {
    loading,
    fetchLocality,
    locality
  }
}
