import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'
import NewEmployeeForm from './NewEmployeeForm.js'

const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        margin: '2rem',
        // marginBottom: '1rem',
    }
}))

const EmployeesView = ({employees, addEmployee}) => {
    const classes = useStyles()
    return (
        <Container className={classes.center}>
            <Typography variant='h4' className={classes.title}>Employees</Typography>
            <NewEmployeeForm addEmployee={addEmployee}/>
            {employees}
        </Container>
    )
}

export default EmployeesView
