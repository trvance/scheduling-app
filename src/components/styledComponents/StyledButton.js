import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'

const StyledButton = withStyles({
    root: {
        //background: 'linear-gradient(45deg, #94FBAB 30%, #26F754 90%)',
        background: 'linear-gradient(45deg, #99aa00 30%, #ffff6e 90%)',
        borderRadius: 3,
        border: 0,
        color: 'black',
        height: 48,
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(45, 45, 45, .4)',
    },
    label: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
})(Button)

export default StyledButton