import { ThemeProps } from './theme.types'

export const lightTheme: ThemeProps = {
    colors: {
        primary: '#d00',
        secondary: '#0f0',
        yellow: {
            light: 'rgba(255, 221, 87, 0.9)',
            base: 'rgba(255, 192, 0, 0.9)',
            dark: 'rgba(240, 147, 43, 0.9)',
        },
        blue: {
            light: 'rgba(110, 170, 255, 0.9)',
            base: 'rgba(50, 120, 255, 0.9)',
            dark: 'rgba(30, 80, 170, 0.9)',
        },
        red: {
            light: 'rgba(255, 130, 120, 0.9)',
            base: 'rgba(255, 70, 70, 0.9)',
            dark: 'rgba(170, 50, 50, 0.9)',
        },
        gray: {
            light: 'rgba(224, 224, 224, 0.9)',
            base: 'rgba(190, 190, 190, 0.9)',
            dark: 'rgba(150, 150, 150, 0.9)',
        },
    },
    typography: {
        fontFamily: 'Roboto',
        sizes: {
            title: '18px',
            body: '12px',
        },
        colors: {
            primary: '#222',
            secondary: '#666',
        },
    },
}
