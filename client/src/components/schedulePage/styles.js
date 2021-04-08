import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendarCard: {
        width: '75vw',
        margin: '2rem',
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, .7)',
    },
}))