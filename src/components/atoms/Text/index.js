import React from 'react';
import { ThemeProvider } from 'styled-components';
import { number, oneOfType, string } from 'prop-types';
import getTheme from './theme';
import { P } from './style';


function Text({ children, color, type }) {
  return (
    <ThemeProvider theme={theme => getTheme(theme, type)}>
      <P color={color}>{ children }</P>
    </ThemeProvider>
  );
}

Text.propTypes = {
  children: oneOfType([number, string]).isRequired,
  color: string,
  type: string,
};

Text.defaultProps = {
  color: '#FFF',
  type: 'medium',
};


export default Text;
