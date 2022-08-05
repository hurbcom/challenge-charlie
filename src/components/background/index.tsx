import React from 'react';
import { useBackground } from '../../services/hooks/useBackground';
import { Container } from './styles';

type Props = {
  children?: React.ReactNode;
};

export const Background: React.FC<Props> = ({ children }) => {
  const { imageUrl } = useBackground();

  return (
    <Container data-testid="background" url={imageUrl}>
      {children}
    </Container>
  );
};
