import { useQuery } from "@tanstack/react-query";

export const geolocationInitialState: GeoLocationSensorState = {
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: Date.now(),
};

export interface IGeolocationPositionError {
    readonly code: number;
    readonly message: string;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
}

const promisifiedGetCurrentPosition = (
    options: PositionOptions = {}
): Promise<GeolocationPosition> =>
    new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (event) => {
                resolve(event);
            },
            (error) => {
                reject(error);
            },
            options
        );
    });

export interface GeoLocationSensorState {
    accuracy: number | null;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    timestamp?: number | null;
    error?: Error | IGeolocationPositionError | null;
}

const useGeolocation = (options: PositionOptions = {}) => {
    return useQuery({
        queryKey: ["coordinates"],
        queryFn: async () => {
                const {coords} = await promisifiedGetCurrentPosition(options);
                return coords;
        },
        enabled: !window.isServer,
        refetchOnWindowFocus: false,
    });
};

export default useGeolocation;
