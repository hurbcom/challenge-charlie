import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BingImage = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api');
      const imageUrl = `https://www.bing.com${response.data.images[0].url}`;
      setImageUrl(imageUrl);
    };
    fetchData();
  }, []);

  if (!imageUrl) {
    return <div>Loading...</div>;
  }

  return <img src={imageUrl} alt="Bing Image of the Day" />;
};

export default BingImage;
