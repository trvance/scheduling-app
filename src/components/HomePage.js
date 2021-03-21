import { useState } from 'react'
import StyledButton from './styledComponents/StyledButton.js'
import { Box, Card, Container, Grid, makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import PersonalCalendar from './calendars/PersonalCalendar'
import Availability from './calendars/Availability'
import Switch from '@material-ui/core/Switch'

const homeStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    },
    title: {
        margin:'1rem',
    },
    homeDisplay: {
        display: 'flex',
        flexDirecton: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendarCard: {
        height:'75vh',
        borderRadius: '10px',
        width: '65vw'
    },
    switchRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

const Home = ({employee}) => {
    const classes = homeStyles()
    const [state, setState] = useState(false)
    // const [calendarDisplay, setCalendarDisplay] = useState(
    //     <PersonalCalendar employeeWeekSchedule={employee.weekSchedule}/>
    // )

    // const editAvailability = () => {
    //     setCalendarDisplay(
    //         <Availability employeeAvailability={employee.availability}/>
    //     )
    // }

    return (
        <Container className={classes.root} >
            <Typography variant='h4' className={classes.title}>Home Page</Typography>
            <Container className={classes.switchRow}>
                {/* <Typography>My Schedule</Typography> */}
                <Switch
                    checked={state}
                    onChange={ (e)=>setState(e.target.checked) }
                    name='checked'
                    inputProps={{ 'aria-label': 'calendar checkbox' }}
                />
                <Typography>Change My Availability</Typography>
            </Container>
            <Container className={classes.homeDisplay} >
                <Card className={classes.calendarCard}>
                    {state ? 
                    <Availability employeeAvailability={employee.availability}/> :
                    <PersonalCalendar employeeWeekSchedule={employee.weekSchedule}/>}
                </Card>
            </Container>
        </Container>
    )
}

export default Home