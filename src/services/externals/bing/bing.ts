import { get } from '../../api';

import { IBingImage } from './interface';

const bingBackgroundImage = {
  getBackgroundImageUrl: () => {
    return get({
      url: '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR',
      baseUrl: process.env.bingUrl
    })
      .then((data: IBingImage) => {
        const path = data?.images?.[0]?.url;
        return path ? `${process.env.bingUrl}${path}` : null;
      })
      .catch((err) => err);
  }
};

export default bingBackgroundImage;
