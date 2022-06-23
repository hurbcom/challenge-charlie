import axios from 'axios';
import { useQuery } from 'react-query';

export const useBackground = () => {
  const endpoint = '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US';

  const { data, isLoading, isSuccess, isError } = useQuery(
    'background',
    async () => {
      return await axios.get(endpoint);
    },
  );

  const backgroundImage = data?.data?.images[0].url;

  return { backgroundImage, isLoading, isSuccess, isError };
};
