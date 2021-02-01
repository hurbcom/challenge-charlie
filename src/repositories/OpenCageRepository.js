import { Repository, createRepository } from '@/repositories/Base/Repository'
import {axiosToGeoLocation} from "@/providers/AxiosServiceProvider";

class OpenCageRepository extends Repository {
    endpoint = '/geocode/v1/json'

    fetch(params) {
        params = {
            ...params,
            language: 'en'
        }
        return super.fetch(params);
    }
}

export default new OpenCageRepository(axiosToGeoLocation)

export const create = createRepository(OpenCageRepository)
