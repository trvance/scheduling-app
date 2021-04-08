import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        padding:'2rem',
    },
    card: {
        maxWidth: 350, 
        borderRadius: '10px',
        boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, .7)',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    },
    expand: {
        transform: 'rotate(0deg)',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.short,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
    textField: {
        // width: 90,
        margin: 5,
    }
}))