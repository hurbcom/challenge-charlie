import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';
import { media } from '../../styles/devices';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    animation: ${fadeIn} 600ms linear normal;
  }

  ${media.mobileS} {
    flex: 1;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

    img {
      height: 11rem;
    }
  }

  ${media.mobileM} {
    img {
      height: 11rem;
    }
  }

  ${media.laptop} {
    flex: 1.2;
    display: flex;

    img {
      height: 15rem;
    }
  }

  ${media.desktop} {
    flex: 1;
    img {
      height: 18rem;
    }
  }
`;
