import React from 'react'
import { I18nextProvider } from 'react-i18next'

import i18n from './i18n'
import SnackbarProvider from 'react-simple-snackbar'

const ProvidersForTests = ({ children }) => (
    <I18nextProvider i18n={i18n}>
        <SnackbarProvider>{children}</SnackbarProvider>
    </I18nextProvider>
)

export default ProvidersForTests
