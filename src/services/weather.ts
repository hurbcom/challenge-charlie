import toast from 'react-hot-toast';

import { Weather } from '~/@types';

type GetWeatherProps = {
  latitude: number;
  longitude: number;
};

export async function getWeather({ latitude, longitude }: GetWeatherProps) {
  try {
    const response = await fetch(`/api/weather?latitude=${latitude}&longitude=${longitude}`);
    const parsedResponse = (await response.json()) as Weather[];

    return parsedResponse;
  } catch {
    toast.error('Algo deu errado ao buscar informações do clima, tente novamente mais tarde!');
  }
}
