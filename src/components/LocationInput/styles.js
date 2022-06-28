import styled from 'styled-components';
import { media } from '../../styles/devices';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding-left: 0;
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);

  img {
    position: absolute;
  }

  ${media.mobileS} {
    height: 3.3rem;

    img {
      width: 2rem;
      left: 0.5rem;
    }
  }

  ${media.mobileM} {
    height: 4.3rem;
  }

  ${media.laptop} {
    height: 12.5vh;

    img {
      width: 3.8rem;
    }
  }

  ${media.desktop} {
    img {
      left: 1.2rem;
      width: 5.5rem;
    }
  }
`;
