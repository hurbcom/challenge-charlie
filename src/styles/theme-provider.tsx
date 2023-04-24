import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { GlobalStyles } from './global.styles'
import { lightTheme } from './themes/light-theme'
import { darkTheme } from './themes/dark-theme'
import { ThemeProps } from './themes/theme.types'

type Props = {
    children?: React.ReactNode
}

type ThemeName = 'light' | 'dark'
interface ThemeContextType {
    theme: ThemeProps
    toggleTheme: () => void
    themeName: ThemeName
}

const ThemeContext = createContext<ThemeContextType>({
    theme: lightTheme,
    toggleTheme: () => {},
    themeName: 'light',
})

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const defaultTheme = localStorage.getItem('theme') as ThemeName
    const [theme, setTheme] = useState<ThemeName>(defaultTheme || 'light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const handleToggleTheme = () => {
        setTheme((_theme) => (_theme === 'light' ? 'dark' : 'light'))
    }

    const themes: Record<ThemeName, any> = {
        light: lightTheme,
        dark: darkTheme,
    }

    return (
        <ThemeContext.Provider
            value={{
                theme: themes[theme],
                toggleTheme: handleToggleTheme,
                themeName: theme,
            }}
        >
            <SCThemeProvider theme={themes[theme]}>
                <GlobalStyles />
                {children}
            </SCThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
