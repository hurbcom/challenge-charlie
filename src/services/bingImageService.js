import { client } from 'utils/client'

const { BING_IMAGE_OF_THE_DAY_URL, BING_URL, CORS_ANYWHERE_URL } = process.env

export function BingImageService() {
  this.getImageOfTheDay = function () {
    return client(`${CORS_ANYWHERE_URL}/${BING_URL}/${BING_IMAGE_OF_THE_DAY_URL}`).then(
      ({ images }) => {
        const [image] = images

        return `${BING_URL}${image.url}`
      },
    )
  }
}
