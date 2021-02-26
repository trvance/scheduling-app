import { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import EditEmployee from './EditEmployee.js'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

import Employee from './Employee.js'


const Employees = () => {
    const [employees, setEmployee] = useState([<Employee/>,])

    const addEmployee=()=>{
        const num = employees.length
        const newEmployee = <Employee employeeNumber={num}/>
        setEmployee([...employees, newEmployee])
    }

    const removeEmployee=()=>{
        const temp = [...employees]
        temp.splice(0, 1)
        setEmployee(temp)
    }

    return (
        <Box marginBottom='2rem'>
            <h1>Employees</h1>
            
                <IconButton style={{bottom: '2vh'}}>
                    <Icon color='secondary' onClick={addEmployee}>add-icon</Icon>
                </IconButton>
                <IconButton style={{bottom: '2vh'}}>
                    <Icon color='secondary' onClick={removeEmployee}>remove-icon</Icon>
                </IconButton>
            
            {employees}
        </Box>
    )
}

export default Employees
