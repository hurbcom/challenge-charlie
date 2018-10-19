import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import breakpoints from './breakpoints';
import colors from './colors';


injectGlobal([`
  ${reset}
  html, body, #root {
    height: 100%;
    width: 100%;
  }
`]);


export default {
  breakpoints,
  colors,
};
