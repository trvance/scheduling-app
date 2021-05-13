import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        margin: '2rem',
        color: '#F7F7FF',
    },
    grid: {
        flexGrow: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonTray: {
        right: 20,
        bottom: 20,
        position: 'fixed',
        zIndex: 2,
    },
    employeeFormContainer: {
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 20,
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: 50,
            paddingBottom: 20,
        }
    },
    button: {
        margin:10,
    },
}))