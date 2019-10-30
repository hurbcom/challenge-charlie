import React from 'react';
import { Location } from './styles';

import { ReactComponent as Compass } from './../../icons/compass.svg';

export default function LocationInput() {
  return (
    <Location>
      <span>
        <Compass />
      </span>
      <input type="text" id="location" placeholder="Rio de Janeiro, Rio de Janeiro" />
    </Location>
  );
}
