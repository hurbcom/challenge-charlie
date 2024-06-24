// Color file used in the application, stores these values for reuse, and allows globally changing a color if needed.
export const COLORS = {
    white: '#FFF',
    gray: 'gray',
    lightGray: '#dddddd',
    black: '#000',
    mainGradientTop: '#dddddd',
    mainGradientBottom: '#7e7e7e',
}

// Object responsible for storing the three levels of colors for each theme, which are yellow, red, blue, or gray.
// The interface file type does not allow requesting a color theme other than these four options.
export const COLORTHEME = {
    yellow: {
        primary: '#FAC100',
        secondary: '#FACC05',
        tertiary: '#B79404'
    },

    red: {
        primary: '#F52000',
        secondary: '#DE0700',
        tertiary: '#9E0500'
    },

    blue: {
        primary: '#99CCFF',
        secondary: '#6699FF',
        tertiary: '#3366FF'

    },

    gray: {
        primary: '#929695',
        secondary: '#9EA3A1',
        tertiary: '#6D706F'
    }
}