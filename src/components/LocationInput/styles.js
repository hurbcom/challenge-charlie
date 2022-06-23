import styled from 'styled-components';
import { media } from '../../styles/devices';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);

  ${media.mobileS} {
    height: 3rem;
    padding-left: 0.7rem;

    img {
      width: 2rem;
    }
  }

  ${media.tablet} {
    height: 8rem;
    padding-left: 1.3rem;

    img {
      width: 5.5rem;
    }
  }
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;

  color: #878787;
  width: 100%;
  height: 100%;
  border: none;
  font-weight: 600;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #cfcfcf;
    font-weight: 400;
    font-style: italic;
  }

  ${media.mobileS} {
    font-size: 1.2rem;
    padding: 1rem 0.8rem 0.8rem 0.8rem;
  }

  ${media.tablet} {
    font-size: 3.5rem;
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }
`;
