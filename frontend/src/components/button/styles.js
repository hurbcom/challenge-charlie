import styled from 'styled-components';

import MButton from '@mui/material/Button';

export const StyledButton = styled(MButton)`
  &.MuiButton-root {
    width: ${({width}) => width ? width : '15.625rem'};
    background-color: #312783;
    color: #FFFFFF;
  }
  &.MuiButton-root:hover {
    background-color: #3c2f9d;
    color: #FFFFFF;
  }
`;

