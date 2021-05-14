import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({
    root: {
        marginBottom:'-15%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '15%',
        }
        
    },
    
    titleCard: {
        width: 400,
        height: 400,
        borderRadius: 50,
        boxShadow: '0 5px 40px -12px rgba(0,0,0,0.8)',

        [theme.breakpoints.down('sm')]: {
            // marginTop: 15,
            width: 300,
            height: 300,
            
        },
    },
    logo: {
        position: 'relative',
        width: 150,
        left: 280,
        top: 270,
        [theme.breakpoints.down('sm')]: {
            width: 112,
            left: 211,
            top: 202,
        }
    },
}))