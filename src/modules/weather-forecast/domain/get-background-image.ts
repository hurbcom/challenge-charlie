import { ENDPOINTS } from '@/common'
import { IBackgroundImageApiResponse, IHttpClient } from '@/interfaces'
import { BackgroundImage } from '@/models'

interface Params {
  imageApi: IHttpClient
}

export async function getBackgroundImage({ imageApi }: Params) {
  const apiImages = await imageApi.get<IBackgroundImageApiResponse>(
    ENDPOINTS.BACKGROUND_IMAGE.GET
  )

  const firstImage = apiImages.images[0]

  const backgroundImage = new BackgroundImage({
    url: firstImage.url,
    attribution: firstImage.copyright,
  })

  return backgroundImage
}
