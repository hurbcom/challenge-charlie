import toast from 'react-hot-toast';

import { Location } from '~/@types';

export async function getLocation(location: string) {
  try {
    const response = await fetch(`/api/location?location=${location}`);
    const parsedResponse = (await response.json()) as Location[];

    return parsedResponse;
  } catch {
    toast.error('Algo deu errado ao buscar informações de sua cidade, tente novamente mais tarde!');
  }
}
