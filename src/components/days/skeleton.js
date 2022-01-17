import React from 'react'
import { useTranslation } from 'react-i18next'

import SearchInput from '../input'
import { tempColors } from '../../utils'
import { CurrentSection, NextDaysSection } from './styles'

export const Skeleton = ({ setLoading, emptySearch, changeLocation }) => {
    const { t } = useTranslation()
    return (
        <>
            <CurrentSection color={tempColors.defaultColors.high}>
                <SearchInput
                    setLoading={setLoading}
                    emptySearch={emptySearch}
                    changeLocation={changeLocation}
                />
                <div>{t('today')}</div>
            </CurrentSection>
            <NextDaysSection color={tempColors.defaultColors.medium}>
                <div>{t('tomorrow')}</div>
            </NextDaysSection>
            <NextDaysSection color={tempColors.defaultColors.low} applyBorder>
                <div>{t('dayAfterTomorrow')}</div>
            </NextDaysSection>
        </>
    )
}
