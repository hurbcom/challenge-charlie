import { env } from '@config/env'
import { api } from '../api'
import { GetLocationResponse } from './open-cage.service.types'

export const openCageService = {
    getLocation: async (latitude: number, longitude: number) => {
        const response = await api.get<GetLocationResponse>(
            `${env.OPEN_CAGE_URL}/geocode/v1/json`,
            {
                params: {
                    q: `${latitude},${longitude}`,
                    key: env.OPEN_CAGE_API_KEY,
                    language: 'en',
                },
            }
        )

        if (!response.data.results.length) {
            throw new Error('Could not get location')
        }

        return response.data.results[0].components
    },
}
