import { Coordinates } from '../interfaces/Coordinates';

export const URL_GEOLOCATION =
    'https://api.opencagedata.com/geocode/v1/json?key=e4a1d306c8bb4fdda513d15283580c71&lang=pt_br&limit=1';

export const getCoordinatesByLocation = async (
    location: string,
): Promise<Coordinates> => {
    const response = await fetch(`${URL_GEOLOCATION}&q=${location}`);
    const data = await response.json();

    if (data.results?.length < 1) {
        return Promise.reject();
    }

    const coordinates = data.results[0].geometry;
    return { lat: coordinates.lat, lon: coordinates.lng };
};

export const getLocationFromCoordinates = async (
    latitude: number,
    longitude: number,
): Promise<string> => {
    const response = await fetch(
        `${URL_GEOLOCATION}&q=${latitude},${longitude}`,
    );
    const data = await response.json();

    if (data.results?.length < 1) {
        return Promise.reject();
    }

    const location = data.results[0].components.city;
    return location;
};
