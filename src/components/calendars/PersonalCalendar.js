import { makeStyles } from '@material-ui/core/styles'
import { 
    ViewState, 
} from '@devexpress/dx-react-scheduler'
import { 
    Scheduler, 
    DayView, 
    WeekView,
    Appointments, 
    AppointmentTooltip,
    Toolbar,
    ViewSwitcher,
    TodayButton,
    DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui'
import Card from '@material-ui/core/Card'
import { appointments } from '../../testData/testTimes'

const PersonalCalendar = ({employeeWeekSchedule}) => {
    const currentDate = new Date()

    return (
            <Scheduler
                data={employeeWeekSchedule}
                firstDayOfWeek={1}
            >
                <ViewState
                    defaultCurrentDate={currentDate}
                />
                <WeekView
                    startDayHour={6}
                    cellDuration={120}
                    endDayHour={24}
                />
                
                <Appointments />
                <AppointmentTooltip 
                    showCloseButton
                />
            </Scheduler>
    )
}

export default PersonalCalendar