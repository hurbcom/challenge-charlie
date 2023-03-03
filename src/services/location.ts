import toast from 'react-hot-toast';

import { Location } from '~/@types';

interface GetLocationProps {
  location: string;
  failureAction?: () => void;
}

export async function getLocation({ failureAction = () => {}, location }: GetLocationProps) {
  try {
    const response = await fetch(`/api/location?location=${location}`);

    if (response.status === 404) {
      toast.error('Localidade não encontrada!');
      failureAction();
      return;
    }

    const parsedResponse = (await response.json()) as Location[];

    return parsedResponse;
  } catch (error) {
    toast.error('Algo deu errado ao buscar informações de sua cidade, tente novamente mais tarde!');

    failureAction();
  }
}
