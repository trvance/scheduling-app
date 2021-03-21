import Calendar from './calendars/Calendar'
import Card from '@material-ui/core/Card'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendarCard: {
        width: '75vw',
        margin: '2rem',
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, .7)',
    },
}))

const Schedule = ({employeesSchedules}) => {
    const classes = useStyles()
    return (
        <Container className={classes.center}>
            <Card className={classes.calendarCard}>
                <Calendar employeesSchedules={employeesSchedules}/>
            </Card>
        </Container>
    )
}

export default Schedule
