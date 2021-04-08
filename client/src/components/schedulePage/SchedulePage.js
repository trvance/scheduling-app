import Calendar from '../calendars/Calendar'
import Card from '@material-ui/core/Card'
import { Container } from '@material-ui/core'
import useStyles from './styles'

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
