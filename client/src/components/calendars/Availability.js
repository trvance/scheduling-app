import React from 'react'
import { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import { 
    ViewState, 
    EditingState, 
    IntegratedEditing,
 } from '@devexpress/dx-react-scheduler'
import { 
    Scheduler,  
    WeekView,
    Appointments, 
    AppointmentForm,
    AppointmentTooltip,
    DragDropProvider,
    ConfirmationDialog,
    EditRecurrenceMenu,
    AllDayPanel,
    DateNavigator,
    Toolbar,
    ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui'
import { areIntervalsOverlapping } from 'date-fns'
import { testEmployees } from '../../testData/testEmployees'

// const Availability = ({employeeAvailability}) => {
//     const currentDate = new Date()
//     const [availability, setAvailability] = useState(employeeAvailability)

//     const commitChanges = ({ added, changed, deleted }) => {
//         if (added) {
//             setAvailability([...availability, {...added}])
//         }
//         if (changed) {
//              setAvailability(() => availability.map(appointment => (
//                 changed[appointment] ? [...appointment, {...changed}] : appointment
//              )))
//         }
//         if (deleted !== undefined) {
//             setAvailability(() => availability.filter(appointment => appointment.id !== deleted))
//         }
//     }

//     return (
//             <Scheduler
//                 data={availability}
//                 firstDayOfWeek={1}
//             >
//                 <ViewState
//                     defaultCurrentDate={currentDate}
//                 />
//                 <WeekView
//                     startDayHour={6}
//                     cellDuration={120}
//                     endDayHour={24}
//                 />
//                 <EditingState onCommitChanges={commitChanges}/>
//                 <IntegratedEditing />
//                 <ConfirmationDialog />
//                 <Appointments />
//                 <AppointmentTooltip 
//                     showOpenButton
//                     showCloseButton
//                     showDeleteButton
//                 />
//                 <AppointmentForm />
//                 <DragDropProvider />
//             </Scheduler>
//     )
// }

// export default Availability

export default class Demo extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        data: testEmployees[0].availability,
        currentDate: new Date(),
      };
  
      this.commitChanges = this.commitChanges.bind(this);
    }
  
    commitChanges({ added, changed, deleted }) {
      this.setState((state) => {
        let { data } = state;
        if (added) {
          const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
          data = [...data, { id: startingAddedId, ...added }];
        }
        if (changed) {
          data = data.map(appointment => (
            changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
        }
        if (deleted !== undefined) {
          data = data.filter(appointment => appointment.id !== deleted);
        }
        return { data };
      });
    }
  
    render() {
      const { currentDate, data } = this.state;
  
      return (
        // <Paper >
          <Scheduler
            data={data}
            firstDayOfWeek={1}
          >
            <ViewState
              currentDate={currentDate}
            />
            <EditingState onCommitChanges={this.commitChanges}/>
            <IntegratedEditing />
            <WeekView
              startDayHour={6}
              cellDuration={120}
              endDayHour={24}
            />
            <ConfirmationDialog />
            <Appointments />
            <AppointmentTooltip
              showOpenButton
              showDeleteButton
            />
            <AppointmentForm />
          </Scheduler>
        // </Paper>
      );
    }
  }
  
  