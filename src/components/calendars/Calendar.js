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
import { appointments } from '../../testData/testTimes'

const Calendar = ({employeesSchedules}) => {
    const currentDate = new Date()
    const schedulerData = appointments

    return (
        <Scheduler
            data={schedulerData}
            firstDayOfWeek={1}
        >
            <ViewState
                defaultCurrentDate={currentDate}
            />
            <DayView
                startDayHour={7}
                cellDuration={60}
                endDayHour={23}
            />
            <WeekView
                startDayHour={7}
                cellDuration={60}
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
    )
}

export default Calendar