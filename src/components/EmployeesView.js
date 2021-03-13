import { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import EditEmployee from './NewEmployeeForm.js'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import NewEmployeeForm from './NewEmployeeForm.js'
import Employee from './Employee.js'

const EmployeesView = ({employees, addEmployee}) => {
    return (
        <Box alignItems='center' justifyContent='center'>
            <h1>Employees</h1>
            <NewEmployeeForm addEmployee={addEmployee}/>
            {employees}
        </Box>
    )
}

export default EmployeesView
