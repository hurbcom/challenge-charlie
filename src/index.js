import React from 'react'
import ReactDOM from 'react-dom'
import SnackbarProvider from 'react-simple-snackbar'

import './i18n'
import Main from './components/main'

ReactDOM.render(
    <SnackbarProvider>
        <Main />
    </SnackbarProvider>,
    document.getElementById('root')
)
