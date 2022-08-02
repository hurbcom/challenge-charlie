import { head } from '../../Common-functions/functions/array'
import { BingDataResponseDTO } from '../dtos/BingDataResponseDTO'
const { REACT_APP_BING_API_URL } = process.env

export const BingParser = (data: BingDataResponseDTO) => {
  const { images } = data
  const { url } = head(images)

  const backgroundImageURL = `${REACT_APP_BING_API_URL}${url}`

  return backgroundImageURL
}
