import { createGlobalStyle } from 'styled-components';
import Colors from './const/colors';
import Devices from './const/responsiveness';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    color: ${Colors.WHITE};
    font-family: 'Exo 2', sans-serif;
    font-weight: 100;
  }
  @media only screen and (max-width: ${Devices.LARGE_SCREEN}) {
    body{
      background-image: none;
    }
  }

  @media only screen and (min-width: ${Devices.LARGE_SCREEN}) {
    body{
      background-image: ${(props) => `url(${props.image})`};
    }
  }
`;
