import ReactTooltip from 'react-tooltip'
import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'
import { useSnackbar } from 'react-simple-snackbar'

import { Container, Content } from './styles'

import englishIcon from '../../assets/englishIcon.jpg'
import portugueseIcon from '../../assets/portugueseIcon.png'
import { snackbarOptions, useWindowSize } from '../../utils'

export const LanguageSelect = () => {
    const { width } = useWindowSize()
    const { t, i18n } = useTranslation()
    const [openSnackbar] = useSnackbar(snackbarOptions)
    const [isPortuguese, setIsPortuguese] = useState(true)

    useEffect(() => {
        setIsPortuguese(i18n.language === 'pt_br')
    }, [i18n])

    const changeLanguage = () => {
        const newLang = isPortuguese ? 'en' : 'pt_br'
        i18n.changeLanguage(newLang, (error) => {
            error
                ? openSnackbar(t('requestError'))
                : setIsPortuguese(i18n.language === 'pt_br')
        })
    }

    return (
        <Container isPortuguese={isPortuguese} isMobile={width < 545}>
            <Content
                data-for='language-hint'
                onClick={changeLanguage}
                data-tip={t('changeLangHint')}
            >
                {t('language')}
                {':'}
                <img
                    alt='language-icon'
                    src={isPortuguese ? portugueseIcon : englishIcon}
                />
            </Content>
            <ReactTooltip effect='solid' id='language-hint' />
        </Container>
    )
}
