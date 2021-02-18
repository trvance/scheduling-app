import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#6d6d6d',
            main: '#424242',
            dark: '#1b1b1b',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffff6e',
            main: '#cddc39',
            dark: '#99aa00',
            contrastText: '#000',
        },
    },
    h2: {
        fontSize: '20px',
    }
})

export default theme