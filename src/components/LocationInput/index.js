import React, { useState } from 'react';

import { Location } from './styles';
import { ReactComponent as Compass } from './../../icons/compass.svg';

function LocationInput(props) {
  const [location, setLocation] = useState("");

  const handleSubmit = (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      props.getWeather(location);
    }
  }

  return (
    <Location>
      <span>
        <Compass />
      </span>
      <input
        type="text"
        value={location}
        placeholder="Rio de Janeiro, Rio de Janeiro"
        onChange={evt => setLocation(evt.target.value)}
        onKeyPress={handleSubmit}
      />
    </Location>
  );
}

export default LocationInput;