export interface CustomColor {
    light: string
    base: string
    dark: string
}

export interface ThemeProps {
    colors: {
        primary: string
        secondary: string
        blue: CustomColor
        yellow: CustomColor
        red: CustomColor
        gray: CustomColor
    }
    typography: {
        fontFamily: string
        sizes: {
            title: string
            subtitle: string
            body: string
        }
        colors: {
            primary: string
            secondary: string
            contrast: string
            contrastBackground: string
            hover: string
        }
        weights: {
            light: number
            normal: number
            bold: number
        }
    }
}
