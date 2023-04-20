import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ptBR from './translations/pt-BR.json'
import en from './translations/en.json'

export type Language = 'pt-BR' | 'en'

const translations: Record<Language, any> = {
    'pt-BR': ptBR,
    en: en,
}

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: translations,
        fallbackLng: 'pt-BR',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
