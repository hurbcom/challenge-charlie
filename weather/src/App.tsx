import '@config/i18n'
import { Home } from '@pages/home/home.page'
import { ThemeProvider } from '@styles/theme-provider'

function App() {
    return (
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    )
}

export default App
