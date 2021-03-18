import { makeStyles } from '@material-ui/core/styles'
import { 
    ViewState, 
    EditingState, 
    IntegratedEditing 
} from '@devexpress/dx-react-scheduler'
import { 
    Scheduler, 
    DayView, 
    WeekView,
    Appointments, 
    AppointmentForm,
    ConfirmationDialog,
    AppointmentTooltip,
    Toolbar,
    ViewSwitcher,
    TodayButton,
    DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui'
import Card from '@material-ui/core/Card'


const useStyles = makeStyles((theme) => ({
    calendarCard: {
        width: '95vw',
        margin: '2rem',
        padding: '1rem',
        borderRadius: '20px',
        boxShadow: '0px 3px 3px 0px rgba(30, 30, 30, .7)',
    },
}))

const Calendar = () => {
    const classes = useStyles()
    const currentDate = new Date()
    const schedulerData = [
        { startDate: '2021-03-17T09:45', endDate: '2021-03-17T11:00', title: 'Meeting' },
        { startDate: '2021-03-17T09:45', endDate: '2021-03-17T11:00', title: 'Meeting' },
        { startDate: '2021-03-17T09:45', endDate: '2021-03-17T11:00', title: 'Meeting' },
        { startDate: '2021-03-17T09:45', endDate: '2021-03-17T20:00', title: 'Meeting' },
        { startDate: '2021-03-17T12:00', endDate: '2021-03-17T13:30', title: 'Go to a gym' },
    ]

    return (
        <Card className={classes.calendarCard}>
            <Scheduler
                data={schedulerData}
            >
                <ViewState
                    defaultCurrentDate={currentDate}
                />
                <DayView
                    startDayHour={7}
                    endDayHour={23}
                />
                <WeekView
                    startDayHour={7}
                    endDayHour={23}
                />
                <Toolbar />
                <ViewSwitcher />
                <Appointments />
                <AppointmentTooltip 
                    showCloseButton
                    showDeleteButton
                />
                <TodayButton />
                <DateNavigator />
            </Scheduler>
        </Card>
    )
}

export default Calendar
