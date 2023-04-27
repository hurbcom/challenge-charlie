jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key) => key,
        i18n: {
            language: 'en',
        },
    }),
    initReactI18next: { type: '3rdParty', init: () => {} },
    language: 'en',
}))
