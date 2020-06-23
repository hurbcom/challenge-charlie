import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import { bingImageApi } from '../../services/apiProvider';

const Background: React.FC = ({ children }) => {
  const [bingImageAdress, setBingImageAdress] = useState('');

  useEffect(() => {
    bingImageApi().then((response) => {
      const background = response.data.images[0];
      setBingImageAdress(background.url);
    });
  }, [setBingImageAdress]);

  return <Container imageUrl={bingImageAdress}>{children}</Container>;
};

export default Background;
