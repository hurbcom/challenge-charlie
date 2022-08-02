import { OpenCageParser } from '../parsers/OpenCage'
import { Location } from '../dtos/OpenCageResponseDTO'

const { REACT_APP_OPEN_CAGE_API_URL, REACT_APP_OPEN_CAGE_KEY } = process.env

export const OpenCageService = {
  getLocality (coordinates: any): Promise<Location> {
    const { lat, lon } = coordinates
    return fetch(`${REACT_APP_OPEN_CAGE_API_URL}/geocode/v1/json?q=${lat}%2C%20${lon}&key=${REACT_APP_OPEN_CAGE_KEY}&language=en&pretty=1`)
      .then(res => res.json())
      .then(OpenCageParser)
  }
}
