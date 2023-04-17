import { useEffect, useState } from "react";

export type AppCoordinatesType = {
    latitude: number;
    longitude: number;
};

type UseGeocodeType = {
    search: string | AppCoordinatesType;
};

export type GeocodedSearchType = {
    city: string;
    state: string;
    latitude: number;
    longitude: number;
};

const GEOCODE_URL = process.env.REACT_APP_OPENCAGE_BASE_URL;

const useGeocode = () => {
    const [error, setError] = useState("");
    const [result, setResult] = useState<GeocodedSearchType | undefined>(undefined);

    const forwardGeocodingUrl = (search: string) =>
        `${GEOCODE_URL}&q=${encodeURI(search)}`;

    const reverseGeocodingUrl = ({ latitude, longitude }: AppCoordinatesType) =>
        `${GEOCODE_URL}&q=${latitude}+${longitude}`;

    const handleResult = async (response: Response) => {
        const { results } = await response.json();
        const data = {
            city: results[0].components.city,
            state: results[0].components.state,
            latitude: results[0].geometry.lat,
            longitude: results[0].geometry.lng,
        };

        setResult(data);
    };

    const onError = (error: any) => {
        setError(error);
    };

    const translate = async ({ search }: UseGeocodeType) => {
        const geocodePasedUrl =
            typeof search === "string"
                ? forwardGeocodingUrl(search)
                : reverseGeocodingUrl(search);
        fetch(geocodePasedUrl)
            .then(handleResult)
            .catch(onError);
    };

    return {
        translate,
        result,
        error,
    };
};

export default useGeocode;
