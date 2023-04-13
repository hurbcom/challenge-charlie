interface Result {
    components: {
        city: string
    };
}

export interface CityModel {
    results: Result[];
}

export interface LocationModel {
    error: string
    location: {
        latitude: number,
        longitude: number
    }
    loading: boolean
}
