import React from 'react'
import styled from 'styled-components'
import { IMainProps } from '../interfaces/main.interface'
import { COLORS } from '../utils/colors'
import { screenBreakpoints } from '../utils/screenBreakpoints'

const MainContainer = styled.div<IMainProps>`
    width: 100vw;
    height: 100vh;

    /* a background is displayed as a fixed gradient if no image is found */
    background: linear-gradient(${COLORS.mainGradientTop}, ${COLORS.mainGradientBottom});
    ${props => props.backgroundimage && `
        background-image: url(${props.backgroundimage});
        background-size: cover;
        background-position: center;
    `}

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${screenBreakpoints.mobileSM}){
        display: block;
    }
`
// Main component that contains the entire application, uses the background from the Bing API when the context returns it.
const Main: React.FC<IMainProps> = ({ children, backgroundimage }) => {
    return <MainContainer
        backgroundimage={backgroundimage}
    >
        {children}
    </MainContainer>
}

export default Main;