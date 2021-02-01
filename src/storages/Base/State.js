export const obj = {
    list: [],
    current: {},
    isLoading: false
}

export default function makeState() {
    return Object.assign({}, obj)
}
