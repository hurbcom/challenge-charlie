jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key) => key,
    }),
    initReactI18next: { type: '3rdParty', init: () => {} },
}))
