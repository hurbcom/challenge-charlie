import React, { useContext, useEffect, useState } from 'react';
import { AppDataContext } from '../../contexts/app-data';
import { LocationInput } from '../input';
import { Container } from './styles';

export const SearchBar: React.FC = () => {
  const [location, setLocation] = useState('');
  const { userLocation } = useContext(AppDataContext);

  useEffect(() => {
    if (userLocation) {
      setLocation(userLocation);
    }
  }, [userLocation]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container onSubmit={onSubmit}>
      <LocationInput
        placeholder="Cidade, Estado, País"
        name="searchLocation"
        data-testid="form-input"
        location={location}
        setLocation={setLocation}
      />
    </Container>
  );
};
