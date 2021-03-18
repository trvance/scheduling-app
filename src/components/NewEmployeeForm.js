import StyledTextField from './styledComponents/StyledTextField.js'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import StyledButton from './styledComponents/StyledButton.js'
import { useState, forwardRef, useEffect, useRef} from 'react'
import { useTheme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=> ({
    root: {
        [theme.breakpoints.down('sm')]: {
            width:'100%',
            margin: 0,
            padding: 0,
        },
        backgroundColor: 'rgba(25,25,25,.8)',
    }
}))

const NewEmployeeForm = ({addEmployee}) => {
    const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState('paper')
    const classes = useStyles()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleInitial, setMiddleInitial] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [position, setposition] = useState('')
  
    const handleClickOpen = (scrollType) => () => {
        setOpen(true)
        setScroll(scrollType)
    }
  
    const handleClose = () => {
        setOpen(false)
    }

    const addEmployeeButton = () => {
        setOpen(false)
        addEmployee({firstName, lastName, middleInitial, email, phoneNumber, position})
    }
  
    const descriptionElementRef = useRef(null)
    useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef
        if (descriptionElement !== null) {
          descriptionElement.focus()
        }
      }
    }, [open])
  
    return (
      <div>
        <IconButton style={{bottom: '2vh'}} onClick={handleClickOpen('paper')}>
            <Icon color='primary'>add-icon</Icon>
        </IconButton>
        <Dialog
            className={classes.root}
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            style={{width: '100%'}}
        >
        <DialogTitle 
            id="scroll-dialog-title"
            style={{
                backgroundImage:'linear-gradient(0deg, #353535 30%, #424242 70%)',
            }}
        >
            <h3 className='card-title'>New Employee</h3>
        </DialogTitle>
            <DialogContent 
                dividers={scroll === 'paper'}
                style={{
                    backgroundColor:'#333333',
                    boxShadow: '0 0 10px #202020',
                    paddingTop: '2.5rem',
                    margin: 0
                }}
            >
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
                <Box justifyContent='center' alignContent='center'>
                    <form noValidate autoComplete='off'>
                        <div>
                            <StyledTextField 
                                label='First Name' 
                                required
                                fullWidth
                                variant='filled'
                                color='secondary'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div >
                            <StyledTextField 
                                label='M.I.' 
                                inputProps={{ maxLength: '1'}}
                                fullWidth
                                variant='filled'
                                color='secondary'
                                value={middleInitial}
                                onChane={(e) => setMiddleInitial(e.target.value)}
                            />
                        </div>
                        <div>
                            <StyledTextField 
                                label='Last Name' 
                                required
                                fullWidth
                                variant='filled'
                                color='secondary'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div>
                            <StyledTextField 
                                label='Phone Number' 
                                required
                                fullWidth
                                variant='filled'
                                color='secondary'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div>
                            <StyledTextField 
                                label='Email' 
                                required
                                fullWidth
                                variant='filled'
                                color='secondary'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <StyledTextField 
                                label='Date Started'
                                required
                                fullWidth
                                variant='filled'
                                color='secondary'
                            />
                        </div>
                        <div>
                            <StyledTextField 
                                label='Starting Position'
                                required
                                fullWidth
                                variant='filled'
                                color='secondary'
                                value={position}
                                onChange={(e) => setposition(e.target.value)}
                            />
                        </div>
                    </form>
                </Box>
            </DialogContentText>
            </DialogContent>
            <DialogActions style={{backgroundColor:'#424242', padding:'1rem 2rem 1rem 2rem'}}>
            <Button onClick={handleClose} color='primary' style={{color:'#bbb'}}>
              Cancel
            </Button>
            <StyledButton style={{height:'3rem', width:'12rem'}} variant='contained' onClick={addEmployeeButton} color='secondary'>
              Add Employee
            </StyledButton>
          </DialogActions>
        </Dialog>
      </div>
    )
}

export default NewEmployeeForm