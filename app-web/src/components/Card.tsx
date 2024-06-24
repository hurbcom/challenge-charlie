import React from 'react'
import styled from 'styled-components'
import { IChildrenProps } from '../interfaces/childrenProps.interface'
import { COLORS } from '../utils/colors'
import { screenBreakpoints } from '../utils/screenBreakpoints'

const CardContainer = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 1px ${COLORS.gray};
    border-radius: 10px;
    width: 50%;
    height: 80%;
    overflow: hidden;

    @media (max-width: ${screenBreakpoints.mobileSM}){
        border-radius: 0px;
        width: 100%;
        height: 100%;
    }
`

// Component that encompasses the central part of the application, creates a card containing the content of the widget.
const Card: React.FC<IChildrenProps> = ({ children }) => {
    return <CardContainer>
        {children}
    </CardContainer>
}

export default Card;