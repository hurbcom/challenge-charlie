import React from 'react';
import styled from 'styled-components';
import { IViewProps } from '../interfaces/view.interface';
import { COLORTHEME } from '../utils/colors';
import { hexToRgba } from '../utils/convertHextoRgba';

const ViewContainer = styled.div<IViewProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${props =>
        props.className === "row primary" && props.colortheme && `
        background-color: ${hexToRgba(COLORTHEME[props.colortheme].primary, 0.6)};
    `};

    ${props =>
        props.className === "row secondary" && props.colortheme && `
        background-color: ${hexToRgba(COLORTHEME[props.colortheme].secondary, 0.95)};
    `}

    ${props =>
        props.className === "row tertiary" && props.colortheme && `
        background-color: ${hexToRgba(COLORTHEME[props.colortheme].tertiary, 1)};
    `}
`
// Component responsible for creating the views used in the main project card, modifying its color based on the received theme.
const View: React.FC<IViewProps> = ({ children, className, colortheme }) => {
    return <ViewContainer
        className={className}
        colortheme={colortheme}
    >
        {children}
    </ViewContainer>
}

export default View;