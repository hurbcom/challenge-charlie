import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  width: 100vw;
  box-sizing: border-box;
  background-color: #dc2326;
  text-align: center;
  color: white;
  display: block;
  padding: 3px;

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
  @media (max-width: 280px) {
    font-size: 0.6rem;
  }
`;

const Error = (props) => {
  return <ErrorContainer>{props.name}</ErrorContainer>;
};

export default Error;
