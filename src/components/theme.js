import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#dbf99c',
            main: '#a8c66c',
            dark: '#77953f',
            contrastText: '#000',
        },
        secondary: {
            light: '#ffffa3',
            main: '#e1dd72',
            dark: '#adab43',
            contrastText: '#000',
        },
        tertiary: {
            light: '#4d935f',
            main: '#1b6535',
            dark: '#003a0e',
            contrastText: '#fff',
        },
        type: 'dark',
    },
    typography: {
        fontFamily: 'roboto',
        fontSize: 16,
    },
})

export default theme