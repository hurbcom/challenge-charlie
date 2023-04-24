/**
 * Configures the internationalization of the application.
 * To add a new language, just add a json file inside the translations folder and insert
 * a key in the translations object of this file that will be used to identify the language.
 * It is important to remember to also change the component that changes the language to allow
 * the user to switch to that language.
 */

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
