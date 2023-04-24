import { env } from '@config/env'
import { api } from '../api'
import { LocationSearchResponse } from './position-stack.service.types'

export const positionStack = {
    getCities: async (search: string) => {
        const response = await api.get<LocationSearchResponse>(
            `${env.CORS_PROXY}/${env.POSITION_STACK_API_URL}/v1/forward`,
            {
                params: {
                    access_key: env.POSITION_STACK_API_KEY,
                    query: search,
                    limit: 20,
                },
            }
        )
        return response.data.data.filter((locale) => locale.type === 'locality')
    },
}
