import { useQuery } from "@tanstack/react-query";
import { openWeather } from "modules/openWeather";

export function useOpenWeather(cityName, options) {
  return useQuery({
    queryKey: ["openWeather", cityName],
    queryFn: () => openWeather(cityName),
    enabled: !!cityName,
    ...options,
  });
}
