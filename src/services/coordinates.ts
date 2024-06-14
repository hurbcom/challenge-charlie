import { env } from '@/utils/env';
import { MonitoringTool } from './monitoring';

export const fetchLocation = async (latitude: string, longitude: string, monitoring?: MonitoringTool): Promise<any> => {
  try {
    const coordinates = `${latitude}, ${longitude}`;
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(coordinates)}&key=${env.OPEN_CAGE_API_KEY}&language=pt-BR&limit=1`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }

    const data = await response.json();
    const city = data.results[0].components.city ?? data.results[0].components._normalized_city;

    return { city };
  } catch (error) {
    if (error instanceof Error) {
      monitoring?.captureAndLogException(error);
    } else {
      monitoring?.captureAndLogException(new Error('Unknown error occurred'));
    }
    throw new Error('Could not fetch location data');
  }
};
