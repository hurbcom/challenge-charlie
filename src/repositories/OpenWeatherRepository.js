import { Repository, createRepository } from '@/repositories/Base/Repository'
import {axiosToOpenWeather} from "@/providers/AxiosServiceProvider";

class OpenWeatherRepository extends Repository {
    endpoint = '/data/2.5/forecast'

    fetch(params) {
        params = {
            ...params,
            units: 'metric',
            lang: 'pt_br'
        }
        return super.fetch(params);
    }

    fetchOne(params) {
        params = {
            ...params,
            units: 'metric',
            lang: 'pt_br'
        }
        return this.$axios.get('/data/2.5/weather', { params });
    }
}

export default new OpenWeatherRepository(axiosToOpenWeather)

export const create = createRepository(OpenWeatherRepository)
