import {Repository} from '@/repositories/Base/Repository'
import makeState from '@/storages/Base/State'
import makeGetters from '@/storages/Base/Getters'
import makeMutations from '@/storages/Base/Mutations'
import makeActions from '@/storages/Base/Actions'

export default function makeStore(name, repository, namespaced = true) {
    if (!(repository instanceof Repository)) {
        throw new Error('storages/Base/Store@makeStore param 2 should be instance of repositories/Repository')
    }
    return {
        name,
        namespaced,
        state: makeState(),
        getters: makeGetters(),
        mutations: makeMutations(),
        actions: makeActions(repository)
    }
}