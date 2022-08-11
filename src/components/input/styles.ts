import styled from 'styled-components';
import { media } from '../../styles/devices';

export const Input = styled.input`
  height: 100%;
  display: flex;

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
  }

  ${media.mobileM} {
    font-size: 1.5rem;
  }

  ${media.laptop} {
    font-size: 2.3rem;
  }

  ${media.desktop} {
    font-size: 3.3rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding-left: 0;
  gap: 20px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);

  img {
    width: 50px;
  }
`;
