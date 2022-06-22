import React, { useState } from 'react';
import { LocationInput } from '../LocationInput';
import { Weather } from '../Weather';
import { Container } from './styles';

export const App = () => {
  const [currentId, setCurrentId] = useState(1);

  const setId = id => () => setCurrentId(id);

  return (
    <Container>
      <LocationInput />
      {[1, 2, 3].map((element, index) => {
        return (
          <Weather
            key={index}
            id={element}
            setId={setId}
            currentId={currentId}
            day="Hoje"
          />
        );
      })}
    </Container>
  );
};
