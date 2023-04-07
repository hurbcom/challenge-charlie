import type { NextApiRequest, NextApiResponse } from 'next'

import { WallpaperToBingAPIData, WallpaperData } from '~/@types/Wallpaper'

export default async function getWallpaperToBingAPI(
  req: NextApiRequest,
  res: NextApiResponse<WallpaperData | { message: string }>,
) {
  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'Apenas requisições GET.' })
  }

  try {
    const response = await fetch(
      `${process.env.ENV_BASE_URL_BING}${process.env.ENV_PARAMS_URL_BING}`,
    )

    const { images }: WallpaperToBingAPIData = await response.json()

    return res.status(200).json({
      image: `${process.env.ENV_BASE_URL_BING}${images[0].url}`,
      title: images[0].title,
    })
  } catch {
    return res.status(404).json({ message: 'Imagem não encontrada.' })
  }
}
