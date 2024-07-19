import { AxiosError } from "axios";
import { useQuery } from "react-query";
import getWeathers, { WeatherList } from "../../api/weather";

export type WeatherProps = {
  query?: string;
  unit?: string;
};

const useWeather = (props: WeatherProps | undefined) => {
  return useQuery<WeatherList, AxiosError>({
    queryKey: ["weather", props?.query, props?.unit],
    queryFn: getWeathers,
    staleTime: 5 * 60 * 1000,
    enabled: !!props?.query,
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export default useWeather;
