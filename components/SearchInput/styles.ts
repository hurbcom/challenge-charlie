import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const CompassIcon = styled.img<{ isLoading?: boolean }>`
  height: 62%;
  animation: ${props =>
    props.isLoading
      ? css`
          ${rotate} 0.5s ease-in-out infinite
        `
      : undefined};
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  line-height: 80%;
  color: #8e8a87;

  border: 0;
  padding: 16px 16px 16px 24px;
  font-family: Signika, Arial, sans-serif;
  //transition: all 250ms ease-in-out;

  //padding-left: 120px;
  //background-image: url('/assets/icons/compass.svg');
  //background-repeat: no-repeat;
  //background-size: 64px 64px;
  //background-position: 5% center;
  //backface-visibility: hidden;
  //transform-style: preserve-3d;

  font-size: 3.5rem;

  &::placeholder {
    //color: color(#a7a7a7 a(0.9));
    color: rgba(56,56,56,0.2);
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  &:hover,
  &:focus {
    //padding: 12px 0;
    outline: 0;
    //border: 1px solid transparent;
    //border-bottom: 1px solid #a7a7a7;
    //border-radius: 0;
    //background-position: 100% center;
  }
`;
