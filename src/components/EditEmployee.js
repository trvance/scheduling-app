import TextField from '@material-ui/core/TextField'
import { withStyles, makeStyles, } from '@material-ui/core/styles'

const StyledTextField = withStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        '& .MuiInputBase-root': {
            color: theme.palette.primary.contrastText,
            fontSize: '1rem',
        },
        '& .MuiInputLabel-root': {
            padding: theme.spacing(1),
            color: theme.palette.primary.light,
            fontSize:'1rem',
        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
            fontSize: '.9rem',
        },
        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.main,
        },
        '& .MuiInputLabel-outlined': {
            fontSize: '1rem',
        },
        '& .MuiInputLabel-outlined.Mui-focused': {
            color: theme.palette.secondary.main,
            fontSize: '1.1rem',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            color: theme.palette.secondary.main,
            fontSize: '1rem',
        },
    }
}))(TextField)

const EditEmployee = (theme) => {
    return (
        <div>
            <form noValidate autoComplete='off'>
                <StyledTextField 
                    label='First Name' 
                    required
                    variant='outlined'
                    color='secondary'
                    />
                <StyledTextField 
                    label='Middle Initial' 
                    variant='outlined'
                    color='secondary'
                    />
                <StyledTextField 
                    label='Last Name' 
                    required
                    variant='outlined'
                    color='secondary'
                    />
            </form>
            
        </div>
    )
}

export default EditEmployee
