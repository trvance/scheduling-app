import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '75vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        // [theme.breakpoints.down('xs')]: {
        //     width: '100vw',

        // }
    },
    titleCard: {
        width: 400,
        height: 400,
        borderRadius: 50,
        boxShadow: '0 5px 40px -12px rgba(0,0,0,0.8)',
        display: 'flex',
        direction: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: 30,
            
        },
        // [theme.breakpoints.down('xs')]: {
        //     height: 300,
        // },
    },
    title: {
        position: 'absolute',
        fontSize: 40,
        fontWeight: 1000,
        top: 109,
        borderRadius: 15,
        borderStyle: 'outset',
        borderColor: 'black',
        borderWidth: 6,
        paddingLeft: 30,
        paddingRight: 30,
        textTransform: 'uppercase',
        color: '#23282E',
        [theme.breakpoints.down('sm')]: {
            top: 177,
        },
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: 22,
        // },
    },
    logo: {
        position: 'relative',
        width: 150,
        left: 150,
        top: 150,
    },
}))