import StyledTextField from './StyledTextField.js'
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
import StyledButton from './StyledButton.js'
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
    const [employee, setEmployee] = useState({
        firstName: '',
        middleInitial: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        position: '',
    })
  
    const handleClickOpen = (scrollType) => () => {
        setOpen(true)
        setScroll(scrollType)
    }
  
    const handleClose = () => {
        setOpen(false)
    }

    const addEmployeeButton = () => {
        setOpen(false)
        addEmployee({employee})
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
            style={{width: '100%', borderRadius: '20px',}}
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
                <Box >
                    <form noValidate autoComplete='off'>
                        <div>
                            <StyledTextField 
                                label='First Name' 
                                required
                                fullWidth
                                variant='filled'
                                color='secondary'
                                value={employee.firstName}
                                onChange={(e) => setEmployee({...employee, firstName: e.target.value})}
                            />
                        </div>
                        <div >
                            <StyledTextField 
                                label='M.I.' 
                                inputProps={{ maxLength: '1'}}
                                fullWidth
                                variant='filled'
                                color='secondary'
                                value={employee.middleInitial}
                                onChange={(e) => setEmployee({...employee, middleInitial: e.target.value})}
                            />
                        </div>
                        <div>
                            <StyledTextField 
                                label='Last Name' 
                                required
                                fullWidth
                                variant='filled'
                                color='secondary'
                                value={employee.lastName}
                                onChange={(e) => setEmployee({...employee, lastName: e.target.value})}
                            />
                        </div>
                        <div>
                            <StyledTextField 
                                label='Phone Number' 
                                required
                                fullWidth
                                variant='filled'
                                color='secondary'
                                value={employee.phoneNumber}
                                onChange={(e) => setEmployee({...employee, phoneNumber: e.target.value})}
                            />
                        </div>
                        <div>
                            <StyledTextField 
                                label='Email' 
                                required
                                fullWidth
                                variant='filled'
                                color='secondary'
                                value={employee.email}
                                onChange={(e) => setEmployee({...employee, email: e.target.value})}
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
                                value={employee.position}
                                onChange={(e) => setEmployee({...employee, position: e.target.value})}
                            />
                        </div>
                    </form>
                </Box>
            </DialogContentText>
            </DialogContent>
            <DialogActions style={{backgroundColor:'#424242', padding:'1rem 2rem 1rem 2rem'}}>
            <Button variant='text' onClick={handleClose} color='primary' style={{color:'#bbb'}}>
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