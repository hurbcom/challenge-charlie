import useSWR, { keyInterface, ConfigInterface } from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json());

interface RequestReturn<Data, Error> {
  data: Data | undefined;
  error: Error | undefined;
  isValidating: boolean;
}

function useRequest<Data = any, Error = any>(
  key: keyInterface,
  configs?: ConfigInterface,
): RequestReturn<Data, Error> {
  const { data, error, isValidating } = useSWR<Data, Error>(key, fetcher, {
    errorRetryCount: 10,
    ...configs,
  });

  return { data, error, isValidating };
}

export { useRequest };
