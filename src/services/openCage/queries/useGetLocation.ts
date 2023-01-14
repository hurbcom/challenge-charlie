import { AxiosError } from 'axios'
import { useCallback, useMemo } from 'react'
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { GetLocationByCoordinatesParams } from '../interfaces/GetLocationByCoordinatesParams'
import { getLocationByCoordinates } from '../get'

type Data = any
type Error = AxiosError
type UseGetLocationOptions = UseQueryOptions<Data, Error>
type UseGetLocation = UseQueryResult<Data, Error>

export default function useGetLocation(
  queryParams: GetLocationByCoordinatesParams | undefined,
  options?: UseGetLocationOptions
): UseGetLocation {
  const queryKey = useMemo(() => ['openCage'], [])

  const queryFn = useCallback(async () => {
    return queryParams && getLocationByCoordinates(queryParams)
  }, [queryParams])

  return useQuery<Data, Error>(queryKey, queryFn, {
    ...options,
    enabled: !!queryParams
  })
}
