import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    },
    title: {
        margin:'1rem',
    },
    homeDisplay: {
        display: 'flex',
        flexDirecton: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendarCard: {
        // height:'75vh',
        width: '90vw',
        marginBottom: '2rem',
        borderRadius: '10px',
        boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, .7)',
    },
    switchRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))