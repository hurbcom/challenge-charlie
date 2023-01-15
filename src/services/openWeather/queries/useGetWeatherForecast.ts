import { AxiosError } from 'axios'
import { useCallback, useMemo } from 'react'
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { getWeatherForecast } from '../get'
import { GetWeatherForecastParams } from '../interfaces/GetWeatherForecastParams'
import { GetWeatherForecastResponse } from '../interfaces/GetWeatherForecastResponse'

type Data = GetWeatherForecastResponse
type Error = AxiosError
type UseGetWeatherForecastOptions = UseQueryOptions<Data, Error>
type UseGetWeatherForecastResult = UseQueryResult<Data, Error>

export default function useGetWeatherForecast(
  queryParams: GetWeatherForecastParams | undefined,
  options?: UseGetWeatherForecastOptions
): UseGetWeatherForecastResult {
  const queryKey = useMemo(() => ['openWeather', queryParams], [queryParams])

  const queryFn = useCallback(async () => {
    return queryParams && getWeatherForecast(queryParams)
  }, [queryParams])

  return useQuery<Data, Error>(queryKey, queryFn, {
    ...options,
    enabled: !!queryParams?.address
  })
}
