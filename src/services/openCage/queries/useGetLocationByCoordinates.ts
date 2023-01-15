import { AxiosError } from 'axios'
import { useCallback, useMemo } from 'react'
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { GetLocationByCoordinatesParams } from '../interfaces/GetLocationByCoordinatesParams'
import { getLocationByCoordinates } from '../get'

type Data = any
type Error = AxiosError
type UseGetLocationByCoordinatesOptions = UseQueryOptions<Data, Error>
type UseGetLocationByCoordinatesResult = UseQueryResult<Data, Error>

export default function useGetLocationByCoordinates(
  queryParams: GetLocationByCoordinatesParams | undefined,
  options?: UseGetLocationByCoordinatesOptions
): UseGetLocationByCoordinatesResult {
  const queryKey = useMemo(() => ['openCage'], [])

  const queryFn = useCallback(async () => {
    return queryParams && getLocationByCoordinates(queryParams)
  }, [queryParams])

  return useQuery<Data, Error>(queryKey, queryFn, {
    ...options,
    enabled: !!queryParams
  })
}
