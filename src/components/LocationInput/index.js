import React, { useState, useEffect } from 'react';

import { Location } from './styles';
import { ReactComponent as Compass } from './../../icons/compass.svg';

function LocationInput(props) {
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(props.location)
  }, [props.location]);

  const handleSubmit = (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      props.fetchWeather(location);
    }
  }

  return (
    <Location>
      <span>
        <Compass />
      </span>
      <input
        type="text"
        aria-label="location-input"
        placeholder="Informe a cidade..."
        value={location}
        onChange={evt => setLocation(evt.target.value)}
        onKeyPress={handleSubmit}
      />
    </Location>
  );
}

export default LocationInput;