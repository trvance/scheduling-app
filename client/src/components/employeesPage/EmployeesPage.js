import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEmployees, deleteEmployee } from '../../actions/employees'
import { Grow, Container, Grid, Typography, Fab, Slide } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import EmployeeCard from './employeeCard/EmployeeCard'
import EditCard from './employeeCard/EditCard'
import EmployeeForm from './employeeForm/EmployeeForm'
import useStyles from './styles'

const EmployeesPage = ({ addEmployee, setAddEmployee }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const employees = useSelector((state) => state.employees)
    const [showEmployeeForm, setShowEmployeeForm] = useState(addEmployee)
    const [showEmployeeGrid, setShowEmployeeGrid] = useState(!addEmployee)
    const [editMode, setEditMode] = useState(false)
    const [currentId, setCurrentId] = useState(null)

    // const deleteDuplicates = () => {
    //     const names = []
    //     const newEmployees = []

    //     employees.forEach((employee) => {
    //         const name = employee.firstName
    //         if(!names.includes(name)) {
    //             names.push(name)
    //             newEmployees.push(employee)
    //         }
    //         else {
    //             dispatch(deleteEmployee(employee._id))
    //         }
    //     })
    //
    // }

    useEffect(() => {
        dispatch(getEmployees())
    }, [currentId, dispatch])


    const handleAddButton = () => {
        setCurrentId(null)
        showEmployeeForm ? unmountEmployeeForm() : mountEmployeeForm()
    }
    
    const mountEmployeeForm = () => {
        setTimeout(function(){setShowEmployeeForm(!showEmployeeForm)},250)
        setShowEmployeeGrid(!showEmployeeGrid)
    }

    const unmountEmployeeForm = () => {
        setShowEmployeeForm(!showEmployeeForm)
        setAddEmployee(false)
        setTimeout(function(){setShowEmployeeGrid(!showEmployeeGrid)},250)
        setEditMode(false)
    }

    const handleEditButton = () => {
        setEditMode(!editMode)
    }

    return (
        <Grid container direction="column" justify="center"  xs={12} spacing={0}>

            <Slide direction ='left' in={showEmployeeGrid} mountOnEnter unmountOnExit>
                {

                editMode 
                ?
                <Grid container direction="column" justify="space-around" alignItems="center">
                    <Grid container direction="row" justify="center" xs={12} spacing={0}>
                        {employees.map((employee) => (
                            <Grid key={employee._id} >
                                <EditCard employee={employee} setCurrentId={setCurrentId} setShowEmployeeForm={setShowEmployeeForm} setShowEmployeeGrid={setShowEmployeeGrid} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                :
                <Grid container direction="column" justify="space-around" alignItems="center">
                    <Grid container direction="row" justify="center" xs={12} spacing={0}>
                        {employees.map((employee) => (
                            <Grid key={employee._id} >
                                <EmployeeCard setCurrentId={setCurrentId} employee={employee} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                }
            </Slide>

            <Grid className={classes.buttonTray}>
                <Fab className={classes.button} color="primary" aria-label="addButton" onClick={ handleAddButton }>
                    { showEmployeeForm ? <ArrowDownwardIcon/> : <AddIcon/> }
                </Fab>
                <Fab className={classes.button} color="primary" style={{backgroundColor: `${editMode ? '#67af77' : '#94FBAB'}`}} aria-label="editButton" onClick={ handleEditButton }>
                    <EditIcon />
                </Fab>
            </Grid>
            
            <Slide direction="up" in={showEmployeeForm} mountOnEnter unmountOnExit>
                <Grid item sm={12} className={classes.employeeFormContainer} >
                    {setAddEmployee(false)}
                    <EmployeeForm currentId={currentId} setCurrentId={setCurrentId} unmountEmployeeForm={unmountEmployeeForm}/>
                </Grid>
            </Slide>

        </Grid>
    )
}

export default EmployeesPage
