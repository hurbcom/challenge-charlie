import React, { useState } from 'react';
import ImageService from '../../services/ImageService';

import BackgroundView from './BackgroundView';

export default function Background(){

  const [url, setUrl] = useState('');

  setupImage();

  async function setupImage(){
    const imageUrl = await new ImageService().getUrl();
    setUrl(imageUrl);
  }

    // 
  return (
    <BackgroundView url={url}/>
  )
}