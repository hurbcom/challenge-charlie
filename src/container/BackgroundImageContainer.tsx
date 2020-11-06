import React, {
  FunctionComponent,
  HtmlHTMLAttributes,
  useEffect,
  useState
} from 'react';

import BackgroundImage from '../components/BackgroundImage';
import { getBackgroundImageUrl } from '../services/externals/bing';

type TBackgroundImageContainer = HtmlHTMLAttributes<HTMLDivElement>;

const BackgroundImageContainer: FunctionComponent<TBackgroundImageContainer> = ({
  children
}) => {
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    getBackgroundImageUrl().then((url) => {
      setImageUrl(url);
    });
  }, []);

  return (
    <BackgroundImage backgroundImageUrl={imageUrl}>{children}</BackgroundImage>
  );
};

export default BackgroundImageContainer;
