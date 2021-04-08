import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { Box, Card, Container, Grid, makeStyles, Grow } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import PersonalCalendar from '../calendars/PersonalCalendar'
import Availability from '../calendars/Availability'
import Switch from '@material-ui/core/Switch'
import useStyles from './styles'

const Home = ({employee}) => {
    const classes = useStyles()
    const [state, setState] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)


    return (
        <Container className={classes.root} >
                <Typography variant='h4' className={classes.title}>Home Page</Typography>
                <Container className={classes.switchRow}>
                    {/* <Typography>My Schedule</Typography> */}
                    <Switch
                        checked={state}
                        onChange={ (e)=>setState(e.target.checked)}
                        name='checked'
                        inputProps={{ 'aria-label': 'calendar checkbox' }}
                        />
                    <Typography>Change My Availability</Typography>
                </Container>
                <Container className={classes.homeDisplay} >
                    <Grow in>
                        <Card className={classes.calendarCard}>
                            {state ? 
                            <Availability employeeAvailability={employee.availability}/> :
                            <PersonalCalendar employeeWeekSchedule={employee.weekSchedule}/>}
                        </Card>
                    </Grow>
                    {/* <ReactCardFlip isFlipped={state} flipDirection='vertical'>
                        <Card className={classes.calendarCard}>
                            <PersonalCalendar employeeWeekSchedule={employee.weekSchedule}/>
                        </Card>
                        <Card className={classes.calendarCard}>
                            <Availability employeeAvailability={employee.availability}/>
                        </Card>
                    </ReactCardFlip> */}
                </Container>
            </Container>
    )
}

export default Home