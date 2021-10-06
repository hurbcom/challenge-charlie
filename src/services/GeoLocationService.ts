import { apiInstance } from './ConfigService';

/* eslint-disable no-unused-vars */
class GeoLocationService {
    public static cacheLocationKey = 'LOCATION_POSITION';

    public static cachecityKey = 'CITY_NAME';

    private static openCageApiKey = 'c63386b4f77e46de817bdf94f552cddf';

    private static openCageUrl = 'https://api.opencagedata.com/geocode/v1/json';

    public static getUserLocation = (
        handleSuccess: (pos: {
            coords: { latitude: number; longitude: number };
        }) => void,
        handleError: (err: { code: number; message: string }) => void
    ) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                handleSuccess,
                handleError
            );
        } else {
            handleError({
                code: 99,
                message:
                    'não foi possível acessar a localização do seu dispositivo'
            });
        }
    };

    public static getUserCityByLocation = async (lat: number, lng: number) => {
        try {
            const response = (await apiInstance.get(this.openCageUrl, {
                params: {
                    q: `${lat},${lng}`,
                    key: this.openCageApiKey
                }
            })) as any;
            if (response.data?.results?.length < 0) return null;
            const { results } = response.data;
            const locationInfos = {
                city: '',
                state: '',
                state_code: '',
                country: ''
            };
            results.forEach((element: any) => {
                if (element.components.city)
                    locationInfos.city = element.components.city;
                if (element.components.state)
                    locationInfos.state = element.components.state;
                if (element.components.state_code)
                    locationInfos.state_code = element.components.state_code;
                if (element.components.country)
                    locationInfos.country = element.components.country;
            });
            return locationInfos;
        } catch (exception) {
            throw new Error(
                'ocorreu um erro ao buscar as informações da sua cidade'
            );
        }
    };

    public static getPositionByCityName = async (cityName: string) => {
        try {
            const response = (await apiInstance.get(this.openCageUrl, {
                params: {
                    q: cityName,
                    key: this.openCageApiKey
                }
            })) as any;

            if (response.data?.results?.length < 0) return null;
            const { results } = response.data;
            const { lat, lng } = results[0].geometry;
            // eslint-disable-next-line camelcase
            const { city, state, state_code } = results[0].components;

            return { lat, lng, city, state, stateCode: state_code };
        } catch (exception) {
            throw new Error(
                'ocorreu um erro ao buscar as informações da sua cidade'
            );
        }
    };
}

export default GeoLocationService;
