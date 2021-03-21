import { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import NewEmployeeForm from './styledComponents/NewEmployeeForm.js'
import Employee from './styledComponents/Employee'
import Divider from '@material-ui/core/Divider'
import EmployeeCard from './styledComponents/EmployeeCard.js'

const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        margin: '2rem',
        color: '#F7F7FF',
    },
    grid: {
        flexGrow: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
}))

const EmployeesView = ({employees, addEmployee}) => {
    const classes = useStyles()
    return (
        <Container className={classes.center}>
            <Typography variant='h4' className={classes.title}>Employees</Typography>
            <Divider light/>
            <NewEmployeeForm addEmployee={addEmployee}/>
            <Grid container className={classes.grid} spacing={1}>
                {employees.map((employee) => (
                    <Grid item>
                        <EmployeeCard employee={employee} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default EmployeesView
