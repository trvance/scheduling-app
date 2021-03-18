import Calendar from './Calendar'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

const Schedule = () => {
    const classes = useStyles()
    return (
        <Container className={classes.center}>
            <Calendar />
        </Container>
    )
}

export default Schedule
