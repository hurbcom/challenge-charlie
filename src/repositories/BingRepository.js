import { Repository, createRepository } from '@/repositories/Base/Repository'
import {axiosToBing} from "@/providers/AxiosServiceProvider";

class BingRepository extends Repository {
    endpoint = '/HPImageArchive.aspx'

    fetch(params) {
        params = {
            ...params,
            format: 'js',
            idx: 0,
            n: 1,
            mkt: 'pt-BR'
        }
        return super.fetch(params);
    }
}

export default new BingRepository(axiosToBing)

export const create = createRepository(BingRepository)
