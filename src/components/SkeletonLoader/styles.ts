import styled from 'styled-components';

export const SkeletonPulse = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
    background: linear-gradient(-90deg, #d6d6d6 0%, #ececec, 50%, #d6d6d6 100%);
    background-size: 400% 400%;
    animation: pulse 1.2s ease-in infinite;

    @keyframes pulse {
        0% {
            background-position: 0% 0%;
        }

        100% {
            background-position: -140% 0%;
        }
    }
`;
