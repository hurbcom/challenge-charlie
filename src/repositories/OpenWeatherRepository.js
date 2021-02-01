import { Repository, createRepository } from '@/repositories/Base/Repository'
import {axiosToOpenWeather} from "@/providers/AxiosServiceProvider";

class OpenWeatherRepository extends Repository {
    endpoint = '/data/2.5/forecast/daily'

    fetch(params) {
        params = {
            ...params,
            cnt: 3,
            units: 'metric',
            lang: 'pt_br'
        }
        return super.fetch(params);
    }
}

export default new OpenWeatherRepository(axiosToOpenWeather)

export const create = createRepository(OpenWeatherRepository)
