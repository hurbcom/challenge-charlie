import ReactTooltip from 'react-tooltip'
import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'
import { useSnackbar } from 'react-simple-snackbar'

import { Container } from './styles'

import englishIcon from '../../assets/englishIcon.jpg'
import portugueseIcon from '../../assets/portugueseIcon.png'
import { snackbarOptions } from '../../utils'

export const LanguageSelect = () => {
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
        <Container isPortuguese={isPortuguese}>
            <div>
                {t('language')}
                {':'}
                <img
                    alt='language-icon'
                    onClick={changeLanguage}
                    data-tip={t('changeLangHint')}
                    src={isPortuguese ? portugueseIcon : englishIcon}
                />
                <ReactTooltip effect='solid' />
            </div>
        </Container>
    )
}
