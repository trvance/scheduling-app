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
import shifts from '../../testData/weekShifts'
import { useSelector } from 'react-redux'
import theme from '../../themes/mintTheme'



const Appointment = ({
    children, style, ...restProps
  }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        color: 'black',
        backgroundColor: theme.palette.primary.dark,
        borderRadius: '10px',
        borderWidth:1,
      }}
    >
      {children}
    </Appointments.Appointment>
);


const Calendar = ({employeesSchedules}) => {
    const currentDate = new Date()
    //const nextWeekDate = new Date(currentDate.setDate(currentDate.getDate() + 7))
    let schedulerData = employeesSchedules ? employeesSchedules : []
    
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
            {/* <WeekView
                startDayHour={7}
                cellDuration={60}
                endDayHour={23}
            /> */}
            <Toolbar />
            {/* <ViewSwitcher /> */}
            <Appointments appointmentComponent={Appointment} />
            <AppointmentTooltip 
                showCloseButton
            />
            <TodayButton />
            <DateNavigator />
        </Scheduler>
    )
}

export default Calendar