import { useEffect, useState } from 'react';
import BingService from '../external/BingService';

const useBingAPI = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  const getCurrentWallpaper = async () => {
    try {
      const data = await new BingService().getCurrentWallpaper();
      setBackgroundImage(data.backgroundImage);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    getCurrentWallpaper();
  }, []);

  return { backgroundImage };
};

export default useBingAPI;
