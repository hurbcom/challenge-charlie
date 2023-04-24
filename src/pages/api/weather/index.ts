import type { NextApiRequest, NextApiResponse } from 'next'

import { WeatherData } from '~/types/Weather'

export default async function getWeatherToOpenWeatherAPI(
  req: NextApiRequest,
  res: NextApiResponse<WeatherData | { message: string }>,
) {
  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'Apenas requisições GET.' })
  }

  const { cidade } = req.query

  try {
    const response = await fetch(
      `${process.env.ENV_BASE_URL_OPEN_WEATHER}/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${process.env.ENV_API_APPID_OPEN_WEATHER}`,
    )

    const data = await response.json()

    return res.status(200).json(data)
  } catch {
    return res
      .status(404)
      .json({ message: 'Previsão do tempo não encontrada.' })
  }
}
