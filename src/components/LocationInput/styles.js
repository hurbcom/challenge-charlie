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

  ${media.laptopL} {
    height: 6rem;
    padding-left: 1rem;

    img {
      width: 3.8rem;
    }
  }

  ${media.desktop} {
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

  ${media.laptopL} {
    font-size: 2.3rem;
    padding: 1rem 0 0.6rem 1rem;
  }

  ${media.desktop} {
    font-size: 3.5rem;
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }
`;
