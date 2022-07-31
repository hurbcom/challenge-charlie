import { head } from '../../Common-functions/functions/array'
import { OpenCageResponseDTO } from '../dto/OpenCageResponseDTO'

export const OpenCageParser = (data: OpenCageResponseDTO) => {
  const { results } = data
  const { components: { city, state } } = head(results)

  return { city, state }
}
