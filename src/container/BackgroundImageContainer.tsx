import React, {
  FunctionComponent,
  HtmlHTMLAttributes,
  useEffect,
  useState
} from 'react';

import BackgroundImage from '../components/BackgroundImage';
import bing from '../services/externals/bing';

type TBackgroundImageContainer = HtmlHTMLAttributes<HTMLDivElement>;

const BackgroundImageContainer: FunctionComponent<TBackgroundImageContainer> = ({
  children
}) => {
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    bing.getBackgroundImageUrl().then((url) => {
      setImageUrl(url);
    });
  }, []);

  return (
    <BackgroundImage backgroundImageUrl={imageUrl}>{children}</BackgroundImage>
  );
};

export default BackgroundImageContainer;
