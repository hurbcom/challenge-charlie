import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { en, pt } from './translations'

const resources = {
    en,
    pt_br: pt,
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'pt_br',
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
})

export default i18n
