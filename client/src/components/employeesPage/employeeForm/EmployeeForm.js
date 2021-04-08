import { Card, Typography, TextField, Button, MenuItem, Divider } from "@material-ui/core"
import { useState } from 'react'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../../actions/employees'
import {formatPhoneNumber} from '../../../formatAndValidations/formatPhoneNumber'
import {isEmailValid} from '../../../formatAndValidations/validateEmail'
import { HOTLINE, COLDLINE, MAINTENANCE, FLOATER, BACKUPCASH, CASHIER, MEATPREP } from '../../../constants/positions'


const positions = [ MAINTENANCE, HOTLINE, COLDLINE, FLOATER, BACKUPCASH, CASHIER, MEATPREP]

const EmployeeForm = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [firstNameError, setFirstNameError] = useState(null)
    const [firstNameHelperText, setFirstNameHelperText] = useState('')
    const [lastNameError, setLastNameError] = useState(null)
    const [lastNameHelperText, setLastNameHelperText] = useState('')
    const [emailError, setEmailError] = useState(null)
    const [emailHelperText, setEmailHelperText] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState(null)
    const [phoneNumberHelperText, setPhoneNumberHelperText] = useState('')

    const [employee, setEmployee] = useState({
        firstName: '',
        middleInitial: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        positions: [MAINTENANCE],
        availability: [
            { 
                id: 1,
                startDate: '2021-03-15T07:30',
                endDate: '2021-03-15T22:30',
                rRule: 'FREQ=WEEKLY;WKST=SU'
            },
            { 
                id: 2,
                startDate: '2021-03-16T07:30',
                endDate: '2021-03-16T22:30',
                rRule: 'FREQ=WEEKLY;WKST=SU'
            },
            { 
                id: 3,
                startDate: '2021-03-17T07:30',
                endDate: '2021-03-17T22:30',
                rRule: 'FREQ=WEEKLY;WKST=SU'
            },
            { 
                id: 4,
                startDate: '2021-03-18T07:30',
                endDate: '2021-03-18T22:30',
                rRule: 'FREQ=WEEKLY;WKST=SU'
            },
            { 
                id: 5,
                startDate: '2021-03-19T07:30',
                endDate: '2021-03-19T22:30',
                rRule: 'FREQ=WEEKLY;WKST=SU'
            },
            { 
                id: 6,
                startDate: '2021-03-20T07:30',
                endDate: '2021-03-20T22:30',
                rRule: 'FREQ=WEEKLY;WKST=SU'
            },
            { 
                id: 0,
                startDate: '2021-03-21T07:30',
                endDate: '2021-03-21T22:30',
                rRule: 'FREQ=WEEKLY;WKST=SU'
            },
        ],
    }) 

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

    const handleSubmit = (e) => {
        e.preventDefault()

        handleFirstName()
        handleLastName()
        handlePhoneNumber()
        handleEmail()

        if(firstNameError==false && lastNameError==false && phoneNumberError==false && emailError==false){
            dispatch(addEmployee(employee))
            clear()
        }

    }

    const clear = () => {
        setEmployee({
            firstName: '',
            middleInitial: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            positions: MAINTENANCE,
        })
        setFirstNameError(null)
        setFirstNameHelperText('')
        setLastNameError(null)
        setLastNameHelperText('')
        setEmailError(null)
        setEmailHelperText('')
        setPhoneNumberError(null)
        setPhoneNumberHelperText('')
    }

    return (
        <Card className={classes.card} >
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit} >
                <Typography className={classes.title} variant="h5">Add New Employee</Typography>
                <Divider orientation="horizontal" />
                <TextField key="firstNameTextField" name="firstName" required error={firstNameError} variant="outlined" label="First Name" fullWidth value={employee.firstName} helperText={firstNameHelperText} onChange={ (e) => setEmployee({ ...employee, firstName: e.target.value.trim() })}  onFocus={ (e) => handleFocus(e) } />
                <TextField name="middleInitial" variant="outlined" label="Middle Initial" fullWidth value={employee.middleInitial} onChange={ (e) => setEmployee({ ...employee, middleInitial: e.target.value.toUpperCase() })} inputProps={{ maxLength:1 }}/>
                <TextField name="lastName" required error={lastNameError} variant="outlined" label="Last Name" fullWidth value={employee.lastName} helperText={lastNameHelperText} onChange={ (e) => setEmployee({ ...employee, lastName: e.target.value.trim() })}  onFocus={ (e) => handleFocus(e) }/>
                <TextField name="phoneNumber" required error={phoneNumberError} variant="outlined" label="Phone Number" fullWidth value={employee.phoneNumber} helperText={phoneNumberHelperText} onChange={ (e) => setEmployee({...employee, phoneNumber: formatPhoneNumber(e.target.value) })}  onFocus={ (e) => handleFocus(e)} />
                <TextField name="email" required error={emailError} variant="outlined" label="Email" fullWidth value={employee.email} helperText={emailHelperText} onChange={ (e) => setEmployee({...employee, email: e.target.value})} onFocus={ (e) => handleFocus(e) } />
                <TextField select name="position" required variant="outlined" label="Position" fullWidth value={employee.positions} onChange={ (e) => setEmployee({...employee, positions: e.target.value })} >
                    {positions.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <Button className={classes.submitButton} variant="contained" color="primary" size="large"  type='submit' fullWidth>Submit</Button>
                <Button className={classes.clearButton} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Card>
    )
}

export default EmployeeForm
