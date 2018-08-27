const apiURL = 'http://localhost:3000/api';

export const coordinates = params => {
    const url = `${apiURL}/coordinates?lat=${params.lat}&long=${
        params.long
    }`;
    return fetch(url).then(res => res.json());
};

export const weather = params => {
    const url = `${apiURL}/wheater?location=${params.location}&unit=${
        params.unit
    }`;
    return fetch(url).then(res => res.json());
};
