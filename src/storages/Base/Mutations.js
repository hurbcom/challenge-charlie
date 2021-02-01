export const obj = {
    setList (state, array) {
        state.list = array
    },

    setCurrent (state, obj) {
        state.current = obj
    },

    setLoading (state, boolean) {
        state.isLoading = boolean
    }
}

export default function makeMutations() {
    return Object.assign({}, obj)
}
