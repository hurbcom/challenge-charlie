export interface LocationItem {
    type: string
    name: string
    locality: string
    label: string
}

export interface LocationSearchResponse {
    data: LocationItem[]
}
