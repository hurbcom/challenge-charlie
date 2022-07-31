export interface OpenCageResponseDTO {
  results: Result[]
}

interface Result {
  components: Location
}

export interface Location {
  city: string
  state: string
}
