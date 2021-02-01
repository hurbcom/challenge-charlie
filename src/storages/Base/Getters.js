export const obj = {
    list (state) {
        return state.list
    },

    isLoading (state) {
        return state.isLoading
    },

    current (state) {
        return state.current
    }
}

export default function makeGetters() {
    return Object.assign({}, obj)
}
