import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'

const StyledTextField = withStyles((theme) => ({
    root: {
        '& .MuiInputBase-root': {
            // color: theme.palette.primary.contrastText,
            backgroundColor: 'transparent',
            // fontSize: '1rem',
            marginBottom: '.2rem',
        },
        '& .MuiInputLabel-root': {
            // color: theme.palette.primary.light,
            fontSize:'1rem',
        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            // borderColor: theme.palette.primary.light,
            fontSize: '.9rem',
        },
        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            // borderColor: theme.palette.secondary.main,
        },
        '& .MuiInputLabel-outlined': {
            fontSize: '1rem',
        },
        '& .MuiInputLabel-outlined.Mui-focused': {
            // color: theme.palette.secondary.main,
            fontSize: '1.1rem',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            // color: theme.palette.secondary.main,
            fontSize: '1rem',
        },
    }
}))(TextField)

export default StyledTextField