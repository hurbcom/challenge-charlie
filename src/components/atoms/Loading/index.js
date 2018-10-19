import React from 'react';
import { LoadingChild, LoadingWrapper } from './style';


function Loading() {
  return (
    <LoadingWrapper>
      <LoadingChild />
      <LoadingChild />
      <LoadingChild />
    </LoadingWrapper>
  );
}


export default Loading;
