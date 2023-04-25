export interface GetLocationResponse {
    results: [
        {
            components: {
                continent: string
                country: string
                country_code: string
                postcode: string
                state: string
                state_code: string
                city: string
                town: string
            }
        }
    ]
}
