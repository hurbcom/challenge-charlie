import React from 'react';
import styled from 'styled-components';
import i18n from '../locales/i18n';
import { COLORS } from '../utils/colors';
import { appFonts } from '../utils/fonts';
import { screenBreakpoints } from '../utils/screenBreakpoints';


const StyledButton = styled.button`
    fill: ${COLORS.white};
    width: 40px;
    height: 40px;
    background-color: ${COLORS.white};
    border: none;
    font-family: ${appFonts};
    cursor: pointer;

    ${props => props.disabled && `
        cursor: default;
        background-color: ${COLORS.lightGray}
    `}
`

const StyledView = styled.div`
    overflow: hidden;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-color: ${COLORS.gray};
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    right: 25%;
    z-index: 1;
    box-shadow: 2px 2px 1px ${COLORS.gray};

    @media screen and (max-width: ${screenBreakpoints.tabletsMD}){
        top: 80px;
        right: 0;
    }
`

// Component responsible for language change in the application, calling the pre-configured i18n library.
const LanguageSwitcher: React.FC = () => {

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <StyledView>
            <StyledButton
                disabled={i18n.language === 'ptBr' ? true : false}
                onClick={() => changeLanguage('ptBr')}
            >
                BR
            </StyledButton>
            <StyledButton
                disabled={i18n.language === 'en' ? true : false}
                onClick={() => changeLanguage('en')}
            >
                EN
            </StyledButton>
        </StyledView>
    )

}

export default LanguageSwitcher