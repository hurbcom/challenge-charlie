import getLocationName from "@services/getLocationName";
import { useQuery } from "@tanstack/react-query";

const useGetUserLocationName = (
    latitude: number | null,
    longitude: number | null,
    isGeolocationLoading: boolean
) => {
    return useQuery({
        queryKey: ["locationName", latitude, longitude],
        queryFn: async (): Promise<string> => {
            return getLocationName(latitude, longitude);
        },
        enabled: !isGeolocationLoading && !window.isServer,
        refetchOnWindowFocus: false,
    });
};

export default useGetUserLocationName;
