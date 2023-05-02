import { useQuery } from "@tanstack/react-query";
import getForecast from "@services/getForecast";

const useGetWeatherForecastData = (location: string) => {
    return useQuery({
        queryKey: ["forecast", location],
        queryFn: () => getForecast(location),
        enabled: !window.isServer,
        cacheTime: 0,
        refetchOnWindowFocus: false,
    });
};

export default useGetWeatherForecastData;
