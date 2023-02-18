import { ENDPOINTS } from '@/common'
import { IBackgroundImageApiResponse, IHttpClient } from '@/interfaces'
import { BackgroundImage } from '@/models'

interface Params {
  imageApi: IHttpClient
  baseUrl: string
}

export async function getBackgroundImage({ imageApi, baseUrl }: Params) {
  const result = await imageApi.get<{ contents: string }>(
    ENDPOINTS.BACKGROUND_IMAGE.GET
  )

  const apiImages = JSON.parse(result.contents) as IBackgroundImageApiResponse

  const firstImage = apiImages.images[0]

  const backgroundImage = new BackgroundImage({
    url: baseUrl + firstImage.url,
    attribution: firstImage.copyright,
  })

  return backgroundImage
}
