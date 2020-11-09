import styled from 'styled-components';

import { appear, rotate } from '../Animated/keyframes';

export const SCompassIcon = styled.img`
  height: 3rem;
  width: 3rem;
`;

export const SForm = styled.form`
  align-items: center;
  background: #ffffffd9;
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

export const SSpinner = styled.div`
  animation: ${appear} 500ms backwards;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    border: 0.3em solid #42424220;
    border-radius: 100%;
  }

  &:after {
    border-radius: 100%;
    border: 0.3em solid #424242;
    border-left-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation: ${rotate} 800ms linear infinite;
  }

  width: 2rem;
  height: 2rem;

  @media (min-width: 601px) {
    height: 2.4rem;
    width: 2.4rem;
  }

  @media (min-width: 961px) {
    height: 2.6rem;
    width: 2.6rem;
  }

  @media (min-width: 1281px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;
