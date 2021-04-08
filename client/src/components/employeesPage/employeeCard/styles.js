import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    card: {
        height: '200px',
        width: '200px',
        margin: '5px',
        marginTop: '10px',
        marginBottom: '10px',
        borderRadius: '10px',
        boxShadow: '0 5px 40px -12px rgba(0,0,0,0.8)',
        transition: '0.1s',
        '&:hover' : {
            boxShadow: '0 10px 70px -12.125px rgba(0,0,0,0.8)',
            height: '205px',
            width: '205px',
            margin: '2px'
        },
        '&:hover button' : {
            opacity: '1',
        }
    },
    cardFrontTop: {
        height: '50px',
        justifyContent: 'center',
        textAlign: 'center',
        margin:'auto',
        alignContent: 'center',
        fontSize: '18px',
    },
    cardFrontDetails: {
        height: '120px',
        display: 'flex',
        flexDirection: 'column',
        justfiyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '14px'
    },
    cardBack: {
        height: '230px',
        width: '200px',
        margin: '5px',
        marginTop:'-25px',
        marginBottom:'-25px',
        borderRadius: '10px',
        boxShadow: '0 10px 70px -12.125px rgba(0,0,0,0.8)',
        '&:hover button' : {
            boxShadow: '0 10px 70px -12.125px rgba(0,0,0,0.8)',
            opacity: 1,
        }
    },
    cardBackContent: {
        display: 'flex',
        flexDirection: 'column',
        justfiyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    flipButtonFrontArea: {
        height: '30px',
        top: '90px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    flipButton: {
        color: theme.palette.secondary.main,
        opacity: 0,
        margin:0,
        padding:0,
        transition: '0.1s',
        height: '25px',
        width: '90px',
        fontSize: '12px',
    },
    divider: {
        backgroundColor: theme.palette.secondary.main,
    }
}))