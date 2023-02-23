import { NextApiRequest, NextApiResponse } from 'next';

import { Location, OpenCageAPIResponse } from '~/@types';

export type GetLocationResponse = Location[] | { message: string };

async function getWeather(req: NextApiRequest, res: NextApiResponse<GetLocationResponse>) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: 'Method not allowed',
    });
  }

  try {
    const { location } = req.query;

    if (!location) {
      return res.status(400).json({
        message: 'Empty location',
      });
    }

    const openCageURL = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.OPEN_CAGE_API_KEY}`;

    const response = await fetch(openCageURL);
    const parsedResponse = (await response.json()) as OpenCageAPIResponse;

    if (!parsedResponse.results) {
      return res.status(404).json({
        message: 'Out of location info',
      });
    }

    const formattedResponse: Location[] = parsedResponse.results.map((location) => {
      return {
        city: location.components.city,
        state: location.components.state,
        latitude: location.geometry.lat,
        longitude: location.geometry.lng,
      };
    });

    return res.status(200).json(formattedResponse);
  } catch (error) {
    const message = (error as Error)?.message;

    return res.status(503).json({
      message: `Something went wrong with location API${!!message ? `, Error: ${message}` : ''}`,
    });
  }
}

export default getWeather;
