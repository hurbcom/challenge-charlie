import React from 'react';
import styled, { css } from 'styled-components';
import { ITextProps } from '../interfaces/text.interface';
import { COLORS } from '../utils/colors';
import { appFonts } from '../utils/fonts';

const baseTextStyle = css`
    height: auto;
    color: ${COLORS.white};
    font-family: ${appFonts};
    font-style: unset;
    font-weight: unset;
    padding: 0;
    margin: 0;
`

const StyledH1 = styled.h1<ITextProps>`
    ${baseTextStyle}
    font-size: 28px;
    padding-top: 10px;
    padding-bottom: 20px;
    font-weight: 500;
    ${props => props.onClick && `
       cursor: pointer;
    `}
`

const StyledH2 = styled.h2<ITextProps>`
    ${baseTextStyle}
    font-size: 20px;
    font-weight: 500;
    ${props => props.onClick && `
       cursor: pointer;
    `}
`

const StyledH3 = styled.h3<ITextProps>`
    ${baseTextStyle}
    font-size: 18px;
    font-weight: 400;
    ${props => props.onClick && `
       cursor: pointer;
    `}
`

const StyledH4 = styled.h4<ITextProps>`
    ${baseTextStyle}
    font-size: 13px;
    color: ${COLORS.gray};
    ${props => props.onClick && `
       cursor: pointer;
    `}
`

// Component responsible for assembling the texts present in the application,
// creating a reusable pattern, can receive h1, h2, h3, h4 and a onClick function.
const Text: React.FC<ITextProps> = ({ children, as, onClick }) => {
    switch (as) {
        case 'h1':
            return (<StyledH1 onClick={onClick}>{children}</StyledH1>)
        case 'h2':
            return (<StyledH2 onClick={onClick}>{children}</StyledH2>)
        case 'h3':
            return (<StyledH3 onClick={onClick}>{children}</StyledH3>)
        case 'h4':
            return (<StyledH4 onClick={onClick}> {children}</StyledH4>)
        default:
            return (<StyledH3 onClick={onClick}>{children}</StyledH3>)
    }
}

export default Text;