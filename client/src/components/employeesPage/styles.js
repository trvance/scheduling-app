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
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
}))