import styled from 'styled-components';
import MTextField from '@mui/material/TextField';

export const StyledTextField = styled(MTextField)`
  & label.Mui-focused {
    color: #3c2f9d;
  }

  & label:hover {
    color: #3c2f9d;
  }

  & label {
    color: #312783;
  }

  & .MuiOutlinedInput-root {
    width: ${({width}) => width ? width : '15.625rem'};
    &.Mui-focused fieldset {
      border-color: none;
    }

    & fieldset {
      border-color: none;
    }

    &:hover fieldset {
      border-color: none;
    }
  }
`;

