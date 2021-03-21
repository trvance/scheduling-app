import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#7c9933',
            main: '#5C8001',
            dark: '#405900',
            contrastText: '#fff',
        },
        secondary: {
            light: '#3c8fa0',
            main: '#0C7489',
            dark: '#08515f',
            contrastText: '#fff',
        },
        tertiary: {
            light: '#a8fac7',
            main: '#93F9B9',
            dark: '#66ae81',
            contrastText: '#fff',
        },
        quarternary: {
            light: '#40b0b6',
            main: '#119DA4',
            dark: '#0b6d72',
            contrastText: '#fff',
        },
        eerie: {
            light: '#515151',
            main: '#262626',
            dark: '#1a1a1a',
            contrastText: '#fff'
        },
        type: 'dark',
    },
    typography: {
        fontFamily: 'roboto',
        fontSize: 16,
    },
})

export default theme