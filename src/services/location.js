import axios from "axios";

const OpenCageAPI = "https://api.opencagedata.com/geocode/v1/json";

const params = {
    pretty: 1,
    key: "c63386b4f77e46de817bdf94f552cddf"
};

export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        try {
            navigator.geolocation.getCurrentPosition(function(position) {
                resolve(position.coords);
            });
        } catch (error) {
            reject(error);
        }
    });
};

export const coordinatesToCityName = (latitude, longitude) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(OpenCageAPI, {
                params: { ...params, q: `${latitude},${longitude}` }
            });

            const { city, state } = response.data.results[0].components;

            resolve(`${city}, ${state}`);
        } catch (error) {
            reject(error);
        }
    });
};

export const cityNameToCoordinates = cityName => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(OpenCageAPI, {
                params: { ...params, q: cityName }
            });

            if (!response.data.results.length) resolve(null);

            resolve(response.data.results[0].geometry);
        } catch (error) {
            reject(error);
        }
    });
};
