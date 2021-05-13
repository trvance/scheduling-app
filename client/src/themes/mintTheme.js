import { createMuiTheme } from '@material-ui/core/styles'

const mintTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#a9fbbb',
            main: '#94FBAB',
            dark: '#67af77',
            contrastText: '#000'
        },
        secondary: {
            light: '#33eaff',
            main: '#00E5FF',
            dark: '#00a0b2',
            contrastText: '#000',
        },
        type: 'dark',
        background: {
            default: '#23282E',
            paper: '#46505D',
        },
        divider: 'rgba(255,255,255,1)',
        error: {
            main: '#CA054D'
        },
    },
    typography: {
        fontSize: 16,
    },
})

export default mintTheme
