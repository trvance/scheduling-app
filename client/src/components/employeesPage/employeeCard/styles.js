import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    card: {
        height: 200,
        width: 200,
        margin: 3,
        borderRadius: '10px',
        //boxShadow: '0 5px 40px -12px rgba(0,0,0,0.8)',
        transition: '0.1s',
        '&:hover' : {
            boxShadow: '0 10px 50px -12.125px rgba(0,0,0,0.8)',
        },
    },
    editCard: {
        height: 200,
        width: 200,
        borderRadius: '10px',
        margin:3,
        //boxShadow: '0 5px 40px -12px rgba(0,0,0,0.8)',
        background: 'rgba(70, 80, 93, .6)',
        //opacity: .5,
        '&:hover' : {
            boxShadow: '0 10px 50px -12.125px rgba(0,0,0,0.8)',
        },
    },
    cardFrontTop: {
        height: '50px',
        justifyContent: 'center',
        textAlign: 'center',
        margin:0,
        alignContent: 'center',
    },
    cardTitle: {
        fontSize: 19, 
        fontWeight: 500,
        marginTop: 5,
        marginLeft: -5,
        marginRight: -5,
    },
    cardFrontDetails: {
        height: '120px',
        width: 200,
        display: 'flex',
        flexDirection: 'reverse-column',
        justfiyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: '14px'
    },
    cardBack: {
        height: 200,
        width: 200,
        margin: 3,
        display: 'flex',
        flexDirections: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        '&:hover' :{
            boxShadow: '0 10px 50px -12.125px rgba(0,0,0,0.8)',
        },
    },
    cardBackContent: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'flex',
        flexDirection: 'column',
        justfiyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 14,
    },
    cardBackInfo: {
        fontSize: 13,
        color: 'lightGray',
        marginBottom: 4,
    },
    flipButtonFrontArea: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: 40,
    },

    backInfoTitle:{
        color: theme.palette.primary.light,
    },


    divider: {
        backgroundColor: theme.palette.primary.main,
        marginLeft: -5,
        marginRight: -5,
    }
}))