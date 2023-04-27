import { useTranslation } from 'react-i18next'
import { Language } from '@config/i18n'
import { Select } from '@components/ui'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()

    const changeLanguage = (lng: Language) => {
        i18n.changeLanguage(lng)
        window.location.reload()
    }

    const currentLanguage = i18n.language

    return (
        <Select
            defaultValue={currentLanguage}
            onSelect={(lang) => changeLanguage(lang as Language)}
            options={[
                { label: '🇧🇷 Português', value: 'pt-BR' },
                { label: '🇺🇸 English', value: 'en' },
            ]}
        />
    )
}

export default LanguageSwitcher
