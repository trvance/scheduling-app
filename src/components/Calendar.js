import { format, } from 'date-fns'
import { useState } from 'react'
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
import { StayPrimaryLandscape } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    centerCalendar: {
        width: '95vw',
        margin: 'auto',
    }
}))

const Calendar = () => {
    const classes = useStyles()
    const currentDate = new Date()
    const schedulerData = [
        { startDate: '2021-03-11T09:45', endDate: '2021-03-11T11:00', title: 'Meeting' },
        { startDate: '2021-03-11T12:00', endDate: '2021-03-11T13:30', title: 'Go to a gym' },
    ]

    return (
        <div className={classes.centerCalendar}>
            <Card style={{ 
                // backgroundColor: '#424242', 
                borderRadius: '10px',
                boxShadow: '0 3px 3px 0 rgba(30, 30, 30, .7)'
            }}>
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
        </div>
    )
}

export default Calendar
