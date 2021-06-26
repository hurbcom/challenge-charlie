import { Suspense } from 'react';

import './Styles/global.css';
import { AppStyle } from './Styles/app';
import { WeatherContainer } from './Containers/Weather';

import image1 from './Assets/Images/image1.png';
import image2 from './Assets/Images/image2.png';
import image3 from './Assets/Images/image3.png';

const dataImages = [
  {
    key: 0,
    src: image1,
  },
  {
    key: 1,
    src: image2,
  },
  {
    key: 2,
    src: image3,
  },
];

function indexRandon() {
  const index = Math.floor(Math.random() * dataImages.length);

  return dataImages[index].src;
}

export const App = () => (
  <Suspense fallback="Carregando...">
    <AppStyle image={indexRandon()}>
      <WeatherContainer />
    </AppStyle>
  </Suspense>
);
