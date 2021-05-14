import { useState, forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { deleteEmployee } from '../../../actions/employees'
import { Card, Container, Button, Typography, Divider, Grid, IconButton, Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Paper, } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/ListTwoTone'
import useStyles from './styles'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
})

const EditCard = ({ employee, currentId, setCurrentId, setShowEmployeeForm, setShowEmployeeGrid }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)


    const handleClose = () => {
        setCurrentId(null)
        setOpen(false)
    }

    const handleEditButton = () => {
        setCurrentId(employee._id)
        setShowEmployeeGrid(false)
        setTimeout(()=>{setShowEmployeeForm(true)},250)
    }

    const handleDeleteButton = () => {
        dispatch(deleteEmployee(employee._id))
        handleClose()
    }

    return (
        <div>
            <Card className={classes.editCard}>
                <Container className={classes.cardFrontTop}>
                    <Typography gutterBottom className={classes.cardTitle} textOverflow="ellipsis">{employee.firstName} {employee.lastName}</Typography>
                </Container>
                <Grid container direction="column" justify="center" alignItems="center" xs={12}>
                    <Slide direction="down" in >
                        <Card style={{borderRadius:'10px'}}>
                            <IconButton style={{backgroundColor:'transparent'}} onClick={ handleEditButton } >
                                <EditIcon style={{ color:'lightgrey', fontSize:75 }} />
                            </IconButton>
                        </Card>
                    </Slide>
                    <Slide direction="up" in >
                        <IconButton style={{background: 'transparent'}} onClick={ () => setOpen(true) } >
                            <DeleteIcon color='error'/>
                        </IconButton>
                    </Slide>
                </Grid>
            </Card>


            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
            <DialogTitle id="alert-dialog-slide-title">{"Are you sure you want to delete "} {employee.firstName} {employee.lastName}?</DialogTitle>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Nevermind
                </Button>
                <Button variant="contained" onClick={ handleDeleteButton } color="primary">
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EditCard
