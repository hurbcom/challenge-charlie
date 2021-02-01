import {Repository} from "@/repositories/Base/Repository";

export class ActionsClass {
    constructor(repository) {
        this.$repository = repository
    }

    classToObject() {
        const originalClass = this
        const keys = Object.getOwnPropertyNames(originalClass)
        return keys.reduce((classAsObj, key) => {
            //Não mapeia o Repositório
            if (key !== '$repository') {
                classAsObj[key] = originalClass[key]
            }
            return classAsObj
        }, {})
    }

    loadList = async ({commit}, params) => {
        commit('setLoading', true)
        await this.$repository.fetch(params).then(response => {
            commit('setList', response.data)
        })
        commit('setLoading', false)
    }

    // search = async ({ commit, state }, params) => {
    //     commit('setLoading', true)
    //     await this.$repository.fetchAll(params).then(response => {
    //         if (response.data.data.length > 0){
    //             const array = response.data.data
    //             commit('setAll', Object.values([...state.list, ...array].reduce((acc,cur)=>Object.assign(acc,{[cur.id]:cur}),{})))
    //         }
    //     })
    //     commit('setLoading', false)
    // }

    loadCurrent = async ({commit}, id) => {
        commit('setLoading', true)
        await this.$repository.fetchOne(id).then(response => {
            commit('setCurrent', response.data)
        })
        commit('setLoading', false)
    }
}

export default function makeActions(repository) {
    if (!(repository instanceof Repository)) {
        throw new Error('storages/Base/Actions@makeActions param should be instance of repositories/Repository')
    }
    const ActionsObj = new ActionsClass(repository)
    return ActionsObj.classToObject()
}
