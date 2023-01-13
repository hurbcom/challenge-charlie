import { AxiosError } from 'axios'
import { useCallback, useMemo } from 'react'
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { GetJsonBingApi } from '../Get'
import { getBingResponse } from '../interfaces/getBingResponse'

type Data = getBingResponse
type Error = AxiosError
type UseGetBingOptions = UseQueryOptions<Data, Error>
type UseGetBingResult = UseQueryResult<Data, Error>

export default function useGetBing(options?: UseGetBingOptions): UseGetBingResult {
  const queryKey = useMemo(() => ['bing'], [])

  const queryFn = useCallback(async () => {
    const bingJson = await GetJsonBingApi()

    return {
      backgroundImage: `https://www.bing.com${bingJson.images[0].url}`
    }
  }, [])

  return useQuery<Data, Error>(queryKey, queryFn, {
    ...options
  })
}
