import React, { FunctionComponent } from 'react';

import { IBackgroundImage } from './interface';
import { SContainerImage } from './styled';

const BackgroundImage: FunctionComponent<IBackgroundImage> = ({
  children,
  backgroundImageUrl
}) => {
  return (
    <SContainerImage backgroundImageUrl={backgroundImageUrl}>
      {children}
    </SContainerImage>
  );
};

export default BackgroundImage;
