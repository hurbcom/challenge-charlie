import BingRepository from '@/repositories/BingRepository'
import makeStore from "@/storages/Base/Storage";

let store = makeStore('bing', BingRepository)

export default store
