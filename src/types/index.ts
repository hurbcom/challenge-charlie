export type CoordsProps = {
    latitude: number;
    longitude: number;
};

export type LocationInfo = {
    annotations: {
        MGRS: string;
    };
    components: {
        city: string;
        state: string;
        country: string;
    };
    geometry: {
        lat: number;
        lng: number;
    };
    formatted: string;
};

export type OpenCageResponse = {
    results: [LocationInfo];
};
