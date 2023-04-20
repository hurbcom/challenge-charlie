import { useQuery } from "@tanstack/react-query";

const useGetUserLocationName = (
    latitude: number | null,
    longitude: number | null,
    isGeolocationLoading: boolean
) => {
    return useQuery({
        queryKey: ["locationName", latitude, longitude],
        queryFn: async (): Promise<string> => {
            if (!latitude || !latitude) {
                throw new Error(
                    `invalid coordinates lat: ${latitude} long: ${longitude}`
                );
            }
            const response = await fetch(
                `/get-location?latitude=${latitude}&longitude=${longitude}`
            );
            if (!response.ok) {
                throw new Error("Can't query for location");
            }
            const { city, state } = await response.json();
            return `${city}, ${state}`;
        },
        enabled: !isGeolocationLoading && !window.isServer,
        refetchOnWindowFocus: false,
    });
};

export default useGetUserLocationName;
