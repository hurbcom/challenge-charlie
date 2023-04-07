import type { NextApiRequest, NextApiResponse } from 'next'

import { LocationToOpenCageAPIData, LocationData } from '~/@types/Location'

export default async function getLocationToOpenCageAPI(
  req: NextApiRequest,
  res: NextApiResponse<LocationData | { message: string }>,
) {
  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'Apenas requisições GET.' })
  }

  const { lon, lat } = req.query

  try {
    const response = await fetch(
      `${process.env.ENV_BASE_URL_OPEN_CAGE}/geocode/v1/json?q=${lon}+${lat}&key=${process.env.ENV_API_KEY_OPEN_CAGE}`,
    )

    const { results }: LocationToOpenCageAPIData = await response.json()
    const { components } = results[0]

    return res.status(200).json({
      city: components.city,
      state: components.state,
    })
  } catch {
    return res.status(404).json({ message: 'Localização não encontrada.' })
  }
}
