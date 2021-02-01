import axios from 'axios'

export class Repository {
    endpoint = null

    constructor ($axios = null) {
        this.$axios = $axios
        if (!$axios) {
            this.$axios = axios
        }
    }

    fetch (params) {
        return this.$axios.get(`${this.endpoint}`, { params })
    }

    fetchOne (id) {
        return this.$axios.get(`${this.endpoint}/${id}`)
    }

    toastValidationErrors(error, snotify) {
        let errors = {}
        if (error.response) {
            if (error.response.data) {
                if (error.response.data.data) {
                    errors = error.response.data.data
                }
            }
        }
        Object.keys(errors).map(field => {
            errors[field].map(msg => {
                snotify.error(msg)
            })
        })
    }
}

export function createRepository (Instance) {
    return $axios => new Instance($axios)
}

export default new Repository()
