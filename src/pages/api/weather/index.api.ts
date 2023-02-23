import { NextApiRequest, NextApiResponse } from 'next';

import { formatWeatherData } from '~/utils';
import { OpenWeatherAPIResponse, Weather } from '~/@types/openWeather';

export type GetWeatherResponse = Weather[] | { message: string };

async function getWeather(req: NextApiRequest, res: NextApiResponse<GetWeatherResponse>) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: 'Method not allowed',
    });
  }

  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({
        message: 'Wrong latitude or longitude',
      });
    }

    const openWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric&lang=pt_br&exclude=minutely,hourly,alerts`;

    const response = await fetch(openWeatherUrl);
    const parsedResponse = (await response.json()) as OpenWeatherAPIResponse;

    if (!parsedResponse.current || !parsedResponse.daily) {
      return res.status(404).json({
        message: 'Out of weather info',
      });
    }

    const NEXT_DAYS_TO_SHOW = 2;

    const nextDaysWeather = parsedResponse.daily
      .filter((_, index) => index + 1 <= NEXT_DAYS_TO_SHOW)
      .map((info, index) => formatWeatherData({ data: info, temperatureFormat: 'object', daysToAdd: index + 1 }));

    const formattedResponse: Weather[] = [
      formatWeatherData({ data: parsedResponse.current, temperatureFormat: 'number' }),
      ...nextDaysWeather,
    ];

    return res.status(200).json(formattedResponse);
  } catch (error) {
    const message = (error as Error)?.message;

    return res.status(503).json({
      message: `Something went wrong with weather API${!!message ? `, Error: ${message}` : ''}`,
    });
  }
}

export default getWeather;
