// Import Styled
import styled from 'styled-components';

// Import Utils
import { GREEN, DARK_GREEN } from '../../../utils/variables';
import { rem } from '../../../utils/helpers';

export const ButtonCTA = styled.button`
    background: ${GREEN};
    color: #FFF;
    font-size: ${rem(14)};
    padding: ${rem(12)} ${rem(20)} ${rem(14)};
    border-radius: ${rem(30)};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    outline: none;

    &:hover{
        background: ${DARK_GREEN};
    }
`;