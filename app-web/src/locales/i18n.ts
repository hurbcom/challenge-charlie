import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/translation.json'
import ptBr from './pt-br/translation.json'

export const resources = {
    en: {
        translation: en
    },
    ptBr: {
        translation: ptBr
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: ['ptBr', 'en'],
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;