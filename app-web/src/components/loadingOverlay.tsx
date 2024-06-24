import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as CompassIcon } from '../assets/icons/compass.svg';
import { ILoadingOverlay } from '../interfaces/loadingoverlay.interface';
import { useLoadingContext } from '../stores/LoadingProvider';
import { COLORS } from '../utils/colors';

const rotateAnimation = keyframes`
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(40deg);
    }
    100%{
        transform: rotate(0dg);
    }
`

const StyledLoader = styled.div<ILoadingOverlay>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: ${props => props.loading ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    z-index: 2;
`

const StyledCompassIcon = styled(CompassIcon)`
    fill: ${COLORS.white};
    width: 100px;
    height: 100px;
    animation: ${rotateAnimation} 2s infinite;
`
// Component responsible for displaying an overlay when the API is initially called, preventing user access to the application.
const LoadingOverlay: React.FC = () => {
    const { loading } = useLoadingContext();

    return <StyledLoader loading={loading}>
        <StyledCompassIcon />

    </StyledLoader>
}

export default LoadingOverlay