import React, { useEffect } from 'react';
import formattedCurrentDate from '../utils/formattedCurrentDate';
import useFetch from '../hooks/useFetch';

const Background = () => {
  const { request } = useFetch();

  const getLocalStorageValue = () => {
    const keys = ['bingImageUrl', 'bingImageDate'];
    const imageUrl = localStorage.getItem(keys[0]);
    const imageDate = localStorage.getItem(keys[1]);
    return { imageUrl, imageDate };
  };

  useEffect(() => {
    const setBackgroudImage = async () => {
      const { imageDate: backgroundImageDate, imageUrl: backgroundImageUrl } =
        getLocalStorageValue();
      if (backgroundImageDate !== formattedCurrentDate()) {
        try {
          const response = await request(`http://localhost:8000/bingImgAP`);
          const { imgUrl, imgStartDate } = response.json;
          localStorage.setItem('bingImageUrl', imgUrl);
          localStorage.setItem('bingImageDate', imgStartDate);
          document.body.style.backgroundImage = `url(${imgUrl})`;
        } catch (err) {
          document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
        }
      } else {
        document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
      }
    };
    setBackgroudImage();
  }, [request]);

  return <></>;
};

export default Background;
