import React from 'react';
import { ThemeProvider } from 'styled-components';
import { string } from 'prop-types';
import getTheme from './theme';
import { Span } from './style';


function Icon({ code, color, type }) {
  return (
    <ThemeProvider theme={theme => getTheme(theme, type)}>
      <Span color={color} data-icon={code} />
    </ThemeProvider>
  );
}

Icon.propTypes = {
  code: string.isRequired,
  color: string,
  type: string,
};

Icon.defaultProps = {
  color: '#FFF',
  type: 'medium',
};


export default Icon;
