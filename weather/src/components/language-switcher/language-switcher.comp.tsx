import { useTranslation } from 'react-i18next'
import { Language } from '@config/i18n'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()

    const changeLanguage = (lng: Language) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('pt-BR')}>Português</button>
        </div>
    )
}

export default LanguageSwitcher
