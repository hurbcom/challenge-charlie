// Import Styled
import styled from 'styled-components';

// Import Utils
import { GREEN } from '../../../utils/variables';
import { rem } from '../../../utils/helpers';

export const LoaderBox = styled.div`
    position: relative;
`;

export const LoaderIcon = styled.div`
    display: inline-block;
    
    &:after {
        content: " ";
        display: block;
        width: ${rem(22)};
        height: ${rem(22)};
        margin: ${rem(1)};
        border-radius: 50%;
        border: ${rem(3)} solid ${GREEN};
        border-color: ${GREEN} transparent ${GREEN} transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;