import { env } from '@config/env'
import { api } from '../api'
import { GetImageResponse } from './bing.types'

export const bingService = {
    getBackground: async () => {
        const response = await api.get<GetImageResponse>(
            `${env.CORS_PROXY}/${env.BING_URL}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US`
        )

        return response.data
    },
}
