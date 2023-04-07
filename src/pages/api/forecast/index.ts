import type { NextApiRequest, NextApiResponse } from 'next'

import { format } from 'date-fns'

import { ForecastData } from '~/@types/Forecast'

export default async function getForecastToOpenWeatherAPI(
  req: NextApiRequest,
  res: NextApiResponse<ForecastData | { message: string }>,
) {
  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'Apenas requisições GET.' })
  }

  const { cidade } = req.query

  try {
    const response = await fetch(
      `${process.env.ENV_BASE_URL_OPEN_WEATHER}/data/2.5/forecast?q=${cidade}&units=metric&lang=pt_br&cnt=16&appid=${process.env.ENV_API_APPID_OPEN_WEATHER}`,
    )

    const data: ForecastData = await response.json()

    const formattedData = {
      ...data,
      list: data.list.map((item) => {
        return {
          ...item,
          dt_txt: format(new Date(item.dt_txt), 'dd/MM/yyyy'),
        }
      }),
    }

    return res.status(200).json(formattedData as ForecastData)
  } catch {
    return res
      .status(404)
      .json({ message: 'Previsão do tempo não encontrada.' })
  }
}
