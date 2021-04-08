import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grow, Container, Grid, Typography, } from '@material-ui/core'
import { getEmployees } from '../../actions/employees'
import EmployeeCard from './employeeCard/EmployeeCard'
import NewEmployeeForm from './employeeForm/EmployeeForm'
import useStyles from './styles'

const EmployeesView = () => {
    const employees = useSelector((state) => state.employees)
    const classes = useStyles()

    return (
        <Container className={classes.center}>
            
            
            {/* <NewEmployeeForm /> */}

            <Grow in>
                <Grid container className={classes.grid} spacing={1}>
                    {employees.map((employee) => (
                        <Grid key={employee._id} item>
                            <EmployeeCard employee={employee} />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        </Container>
    )
}

export default EmployeesView
