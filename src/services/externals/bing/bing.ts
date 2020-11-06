import { get } from '../../api';

import { IBingImage } from './interface';

export const getBackgroundImageUrl = () => {
  return get({
    url: '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR',
    baseUrl: process.env.bingUrl
  })
    .then((data: IBingImage) => {
      const { url } = data?.images?.[0];
      return url ? `${process.env.bingUrl}${url}` : null;
    })
    .catch((err) => err);
};
