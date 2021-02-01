import OpenCageRepository from "@/repositories/OpenCageRepository";
import makeStore from "@/storages/Base/Storage";

let store = makeStore('openCage', OpenCageRepository)

export default store
