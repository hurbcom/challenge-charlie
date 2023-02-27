import toast from 'react-hot-toast';

import { Coordinates, Weather } from '~/@types';

type GetWeatherProps = {
  coordinates: Coordinates;
  failureAction?: () => void;
};

export async function getWeather({ coordinates, failureAction = () => {} }: GetWeatherProps) {
  try {
    const response = await fetch(`/api/weather?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}`);

    if (response.status === 404) {
      toast.error('Não foram encontrados dados sobre o clima dessa localidade!');
      failureAction();
      return;
    }

    const parsedResponse = (await response.json()) as Weather[];

    return parsedResponse;
  } catch {
    toast.error('Algo deu errado ao buscar informações do clima, tente novamente mais tarde!');
    failureAction();
  }
}
