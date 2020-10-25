import React from 'react';
import { LoadingContainer, LoadingDiv } from './styles';
import { CSSProperties } from 'styled-components';

export interface LoadingProps {
  style?: CSSProperties;
}

export const Loading = ({ style }: LoadingProps) => {
  return (
    <LoadingContainer style={style}>
      <LoadingDiv />
    </LoadingContainer>
  );
};
