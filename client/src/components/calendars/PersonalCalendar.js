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
    AppointmentTooltip,
    Toolbar,
    ViewSwitcher,
    TodayButton,
    DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui'
import Card from '@material-ui/core/Card'
import theme from '../../themes/mintTheme'
import { testEmployees } from '../../testData/testEmployees'

const Appointment = ({
    children, style, ...restProps
  }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        color: 'black',
        backgroundColor: theme.palette.primary.dark,
        borderRadius: '5px',
        borderWidth:1,
      }}
    >
      {children}
    </Appointments.Appointment>
);

const PersonalCalendar = ({employee}) => {
    const currentDate = new Date()
    const nextWeekDate = new Date(currentDate.setDate(currentDate.getDate() + 7))
    const employeeWeekSchedule = employee ? employee.weekSchedule : testEmployees

    return (
            <Scheduler
                data={employeeWeekSchedule}
                firstDayOfWeek={1}
            >
                <ViewState
                    defaultCurrentDate={nextWeekDate}
                />
                <WeekView
                    startDayHour={6}
                    cellDuration={90}
                    endDayHour={24}
                />
                <Toolbar />
                <Appointments
                    appointmentComponent={Appointment} 
                    readOnly
                />
                <AppointmentTooltip 
                    showCloseButton
                />
                <TodayButton />
                <DateNavigator />
            </Scheduler>
    )
}

export default PersonalCalendar