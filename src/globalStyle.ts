import styled from 'styled-components';

export const GlobalStyled = styled.div`
  @font-face {
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: normal;
    src: local('Trebuchet MS'), url('./assets/fonts/trebuc.woff') format('woff');
  }

  @font-face {
    font-family: 'Trebuchet MS Italic';
    font-style: normal;
    font-weight: normal;
    src: local('Trebuchet MS Italic'), url('./assets/fonts/Trebuchet-MS-Italic.woff') format('woff');
  }

  font-family: 'Trebuchet MS';
`;
