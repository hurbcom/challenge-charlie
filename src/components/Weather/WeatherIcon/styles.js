import styled from 'styled-components';
import { media } from '../../../styles/devices';
import { fadeIn } from '../../../styles/animations';

export const IconWrapper = styled.div`
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
      height: 16rem;
    }
  }

  ${media.laptop} {
    flex: 1.5;
    display: flex;

    img {
      height: 23rem;
    }
  }

  ${media.desktop} {
    img {
      height: 25rem;
    }
  }
`;
