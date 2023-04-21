import { env } from '@config/env'
import { api } from '../api'
import { GetImageResponse } from './bing.service.types'

export const bingService = {
    getBackgroundUrl: async () => {
        const response = await api.get<GetImageResponse>(
            `${env.CORS_PROXY}/${env.BING_URL}/HPImageArchive.aspx`,
            {
                params: {
                    format: 'js',
                    idx: 0,
                    n: 1,
                    mkt: 'pt-US',
                },
            }
        )

        if (!response.data.images.length) {
            throw new Error('Could not get background image')
        }

        return response.data.images[0].url
    },
}
