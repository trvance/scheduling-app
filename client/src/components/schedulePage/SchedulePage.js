import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEmployees } from '../../actions/employees'
import Calendar from '../calendars/Calendar'
import PersonalCalendar from '../calendars/PersonalCalendar'
import DropDownMenuEmployees from './dropDownMenu/DropDownMenuEmployees'
import { Container, Slide, Switch, Typography, Card, Grid } from '@material-ui/core'
import ReactCardFlip from 'react-card-flip'
import useStyles from './styles'

const Schedule = () => {
    const classes = useStyles()
    const [isFlipped, setIsFlipped] = useState(false)
    const dispatch = useDispatch()
    const employees = useSelector((state) => state.employees)
    const [selectedEmployee, setSelectedEmployee] = useState(employees[0])
    
    const createScheduleWithNames = () => {
        const scheduleWithNames = []
        employees.forEach((employee) => {
            let name = `${employee.firstName} ${employee.lastName}`
            employee.weekSchedule.forEach((shift) => {
                let shiftTitle = `${name} - ${shift.title}`
                let tempShift = {...shift}
                tempShift.title = shiftTitle
                scheduleWithNames.push(tempShift)
            })
        })
        return scheduleWithNames
    }
    
    const employeesSchedules = createScheduleWithNames()


    return (
        <Slide in direction="left">
            <Grid container style={{paddingLeft: 20, paddingRight: 20}} justify='center' direction='column' alignItems='center' spacing={0}>
                <Grid container style={{height: 40, marginBottom:10}} justify='space-between' direction='row' alignItems='spaceAround' xs={12}>
                    <Grid container item direction='row' alignItems='center' xs={6}>
                        {isFlipped
                            ? null
                            : <DropDownMenuEmployees  selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee} />
                        }
                    </Grid>
                    <Grid container style={{paddingRight:20}} justify='flex-end' direction='row' alignItems='center'xs={6}>
                        <Typography style={{fontWeight:450, fontSize: 18}} >View All</Typography>
                        <Switch
                            checked={isFlipped}
                            onChange={ (e)=>setIsFlipped(e.target.checked)}
                            name='checked'
                            inputProps={{ 'aria-label': 'calendar checkbox' }}
                        />
                    </Grid>
                </Grid>
                <ReactCardFlip flipSpeedFrontToBack='.5' flipSpeedBackToFront='.5' isFlipped={isFlipped} flipDirection='vertical'>
                    <Card className={classes.calendarCard}>
                        <PersonalCalendar employee={selectedEmployee} />
                    </Card>
                    <Card className={classes.calendarCard}>
                        <Calendar employeesSchedules={employeesSchedules} />
                    </Card>
                </ReactCardFlip>
            </Grid>
        </Slide>
    )
}

export default Schedule
