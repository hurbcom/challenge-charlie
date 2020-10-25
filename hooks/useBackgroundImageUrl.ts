import { useEffect, useState } from 'react';
import { bingBackgroundImageExternal } from '../external/bing';

export const useBackgroundImageUrl = () => {
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    const subscriptions = [
      bingBackgroundImageExternal.fetchBackgroundImageUrl().subscribe(url => {
        setImageUrl(url);
      }),
    ];

    return () => subscriptions.map(s => s.unsubscribe());
  }, []);

  return { backgroundImageUrl: imageUrl };
};
