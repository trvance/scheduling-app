import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    navbar: {
        backgroundColor: theme.palette.background.default,
    },
    navbarLinks: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        color: theme.palette.primary.main,
        fontSize: '1.3rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginRight: '2rem',
        marginLeft: '2rem',
        '&:hover': {
            color: theme.palette.primary.light,
        },
    },
    signInLogo: {
        
    }
}))