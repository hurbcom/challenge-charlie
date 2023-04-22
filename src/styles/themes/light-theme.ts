import { ThemeProps } from './theme.types'

export const lightTheme: ThemeProps = {
    colors: {
        primary: '#3F51B5',
        secondary: '#FF9800',
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
        fontFamily: 'Nunito',
        sizes: {
            title: '2em',
            subtitle: '1.5em',
            body: '1em',
        },
        colors: {
            primary: '#222',
            secondary: '#666',
            contrastBackground: '#FFF',
        },
        weights: {
            light: 300,
            normal: 400,
            bold: 700,
        },
    },
}
