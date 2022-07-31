import { OpenCageParser } from '../parsers/OpenCage'
import { Location } from '../dto/OpenCageResponseDTO'

const { REACT_APP_OPEN_CAGE_API_URL, REACT_APP_OPEN_CAGE_KEY } = process.env

export const getLocality = (): Promise<Location> =>
  fetch(`${REACT_APP_OPEN_CAGE_API_URL}/geocode/v1/json?q=-27.5787883%2C%20-48.4887322&key=${REACT_APP_OPEN_CAGE_KEY}&language=en&pretty=1`)
    .then(res => res.json())
    .then(OpenCageParser)
