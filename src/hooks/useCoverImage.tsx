import { useEffect, useState } from 'react';
import { CoverImage } from '../helpers/models';
import { getCoverImage } from '../services/bing';

export function useCoverImage() {
  const [coverImage, setCoverImage] = useState<CoverImage>();

  const handleCoverImage = async () => {
    const result = await getCoverImage();

    if (result) {
      setCoverImage(result);
    }
  };

  useEffect(() => {
    handleCoverImage();
  }, []);

  return { coverImage };
}
