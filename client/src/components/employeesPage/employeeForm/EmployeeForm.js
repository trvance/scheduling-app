import { Card, Typography, TextField, Button, MenuItem, Paper, Grid, List, ListItem, ListItemIcon, Checkbox, ListItemText } from "@material-ui/core"
import { useState, useEffect } from 'react'
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployee, editEmployee } from '../../../actions/employees'
import {formatPhoneNumber} from '../../../formatAndValidations/formatPhoneNumber'
import {isEmailValid} from '../../../formatAndValidations/validateEmail'
import { HOTLINE, COLDLINE, MAINTENANCE, FLOATER, BACKUPCASH, CASHIER, MEATPREP, VEGGIE } from '../../../constants/positions'
import AvailabilityComponent from './availabilityComponent/AvailabilityComponent'

const positions = [ MAINTENANCE, HOTLINE, COLDLINE, FLOATER, BACKUPCASH, CASHIER, MEATPREP, VEGGIE]
const hours = [ '0-5', '5-10', '10-15', '15-20', '20-25', '25-30', '30-35', '35-40', '40-45', '45+']


const EmployeeForm = ({ currentId, setCurrentId, unmountEmployeeForm }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const selectedEmployee = useSelector((state) => currentId ? state.employees.find((emp) => emp._id === currentId) : null)
    
    const [employee, setEmployee] = useState({
        firstName: '',
        middleInitial: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        positions: [MAINTENANCE],
        desiredHours: '25-30',
        numHours: 0,
        availability: [
            {
            day: 'Monday',
            morning: false,
            evening: false,
            },
            {
            day: 'Tuesday',
            morning: false,
            evening: false,
            },
            {
            day: 'Wednesday',
            morning: false,
            evening: false,
            },
            {
            day: 'Thursday',
            morning: false,
            evening: false,
            },
            {
            day: 'Friday',
            morning: false,
            evening: false,
            },
            {
            day: 'Saturday',
            morning: false,
            evening: false,
            },
            {
            day: 'Sunday',
            morning: false,
            evening: false,
            },
        ]
    }) 

    const [firstNameError, setFirstNameError] = useState(null)
    const [firstNameHelperText, setFirstNameHelperText] = useState('')
    const [lastNameError, setLastNameError] = useState(null)
    const [lastNameHelperText, setLastNameHelperText] = useState('')
    const [emailError, setEmailError] = useState(null)
    const [emailHelperText, setEmailHelperText] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState(null)
    const [phoneNumberHelperText, setPhoneNumberHelperText] = useState('')

    useEffect(() => {
        if(selectedEmployee)setEmployee(selectedEmployee)
    }, [selectedEmployee])

    const handleFocus = (e) => {
        const fieldName = e.target.name
        switch (fieldName){
            case 'firstName':{
                setFirstNameError(null)
                setFirstNameHelperText('')
                break
            }
            case 'lastName': {
                setLastNameError(null)
                setLastNameHelperText('')
                break
            }
            case 'email': {
                setEmailError(null)
                setEmailHelperText('')
                break
            }
            case 'phoneNumber': {
                setPhoneNumberError(null)
                setPhoneNumberHelperText('')
                break
            }
        }
    }
    
    const handleFirstName = () => {
        if (employee.firstName == '') {
            setFirstNameError(true)
            setFirstNameHelperText('Gotta have a first name!')
        }
        else {
            setFirstNameError(false)
            setFirstNameHelperText('')
        }
    }

    const handleLastName = () => {
        if (employee.lastName == '') {
            setLastNameError(true)
            setLastNameHelperText('Gotta have a last name!')
        }
        else {
            setLastNameError(false)
            setLastNameHelperText('')
        }
    }

    const getAvailability = (componentAvailability) => {
        setEmployee({...employee, availability: componentAvailability})
    }

    const handlePhoneNumber = () => {
        if (employee.phoneNumber.length < 14) {
            setPhoneNumberError(true)
            setPhoneNumberHelperText('Phone number is too short!')
        }
        else {
            setPhoneNumberError(false)
            setPhoneNumberHelperText('')
        }
    }

    const handleEmail = () => {
        if (!isEmailValid(employee.email)) {
            setEmailError(true)
            setEmailHelperText("That isn't a valid email!")
        }
        else {
            setEmailError(false)
            setEmailHelperText('')
        }
    }

    const handlePositions = (option) => () => {

        const newPositions = employee.positions
        
        if (!newPositions.includes(option)) {
            newPositions.push(option);
        } else {
            const currentPosition = employee.positions.indexOf(option)
            newPositions.splice(currentPosition, 1);
        }

        
        setEmployee({...employee, positions:newPositions})
        console.log({employee})
    }

    const validateInfo = () => {
        handleFirstName()
        handleLastName()
        handlePhoneNumber()
        handleEmail()

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(employee)
        validateInfo()

        setTimeout(function(){
            if(firstNameError==false && lastNameError==false && phoneNumberError==false && emailError==false){
                if(currentId) {
                    dispatch(editEmployee(currentId, employee))
                }
                else {
                    dispatch(addEmployee(employee))
                }
                clear()
                unmountEmployeeForm()
            }
        },1000)

        
    }

    const clear = () => {
        setEmployee({
            firstName: '',
            middleInitial: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            positions: [MAINTENANCE],
            desiredHours: '25-30',
            numHours: 0,
            availability: [
                {
                day: 'Monday',
                morning: false,
                evening: false,
                },
                {
                day: 'Tuesday',
                morning: false,
                evening: false,
                },
                {
                day: 'Wednesday',
                morning: false,
                evening: false,
                },
                {
                day: 'Thursday',
                morning: false,
                evening: false,
                },
                {
                day: 'Friday',
                morning: false,
                evening: false,
                },
                {
                day: 'Saturday',
                morning: false,
                evening: false,
                },
                {
                day: 'Sunday',
                morning: false,
                evening: false,
                },
    
            ]
        })
        setFirstNameError(null)
        setFirstNameHelperText('')
        setLastNameError(null)
        setLastNameHelperText('')
        setEmailError(null)
        setEmailHelperText('')
        setPhoneNumberError(null)
        setPhoneNumberHelperText('')
        setCurrentId(null)
    }

    return (
        <Card className={classes.card} >
            <Typography className={classes.title} variant="h4">{currentId ? `Edit ` : `Add New `}Employee</Typography>
            <Grid container direction="row" justify="center" xs={12}>
                <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={ handleSubmit } >

                    <Grid container direction="column" justifty="center" item md={6} xs={12}>
                        <Paper className={classes.paper} elevation={8} style={{paddingBottom: 30}}>
                            <Typography variant="h5" gutterBottom>Information</Typography>

                            <TextField name="firstName" required error={firstNameError} variant="outlined" label="First Name" value={employee.firstName} helperText={firstNameHelperText} onChange={ (e) => setEmployee({ ...employee, firstName: e.target.value.trim() })}  onFocus={ (e) => handleFocus(e) } />
                            <TextField name="middleInitial" variant="outlined" label="Middle Initial" value={employee.middleInitial} onChange={ (e) => setEmployee({ ...employee, middleInitial: e.target.value.toUpperCase() })} inputProps={{ maxLength:1 }}/>
                            <TextField name="lastName" required error={lastNameError} variant="outlined" label="Last Name" value={employee.lastName} helperText={lastNameHelperText} onChange={ (e) => setEmployee({ ...employee, lastName: e.target.value.trim() })}  onFocus={ (e) => handleFocus(e) }/>
                            <TextField name="phoneNumber" required error={phoneNumberError} variant="outlined" label="Phone Number" value={employee.phoneNumber} helperText={phoneNumberHelperText} onChange={ (e) => setEmployee({...employee, phoneNumber: formatPhoneNumber(e.target.value) })}  onFocus={ (e) => handleFocus(e)} />
                            <TextField name="email" required error={emailError} variant="outlined" label="Email" value={employee.email} helperText={emailHelperText} onChange={ (e) => setEmployee({...employee, email: e.target.value})} onFocus={ (e) => handleFocus(e) } />
                            <TextField select name="hours" required variant="outlined" label="Desired Hours" value={employee.desiredHours} onChange={ (e) => setEmployee({...employee, desiredHours: e.target.value}) }>
                                {hours.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option} hours
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Paper>
                    </Grid>


                <Grid container item direction="column" justify="center" alignContent="center" md={6} xs={12} >
                    <Paper className={classes.paper} elevation={8}>
                    
                        <Typography variant="h5" gutterBottom>Positions</Typography>

                        <List >
                            {positions.map((position, index) => (
                                <ListItem key={position} style={{height: 30}} role={undefined} value={position} button onClick={handlePositions(position)}>
                                    <ListItemIcon>
                                        <Checkbox 
                                            size="small"
                                            edge="start"
                                            checked={employee.positions.indexOf(position) !== -1}
                                            tabIndex={-1}
                                            style={{background: "transparent"}}
                                            disableRipple
                                        />
                                        <ListItemText style={{marginTop:7}} id={index} primary={position}/>
                                    </ListItemIcon>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>

                    <Grid item >
                        <Paper className={classes.paper} elevation={8}>

                            <Typography variant="h5" gutterBottom>Availability</Typography>
                            <AvailabilityComponent employee={employee} employeeAvailability={employee.availability} getAvailability={getAvailability} />

                        </Paper>
                    </Grid>

                </Grid>

                <Button className={classes.submitButton} variant="contained" color="primary" size="large"  type='submit' fullWidth>{currentId ? 'Update' : 'Submit'}</Button>
                <Button className={classes.clearButton} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

                </form>
            </Grid>
        </Card>
    )
}

export default EmployeeForm
