import { useState } from 'react'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler'
import { 
    Scheduler,  
    WeekView,
    Appointments, 
    AppointmentTooltip,
    DragDropProvider,
    EditRecurrenceMenu,
    AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui'


export default class Demo extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        data: props.employeeAvailability,
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


    render () {
        const { currentDate, availability } = this.state;

        return (

            <Scheduler
                data={availability}
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
                <EditingState 
                    onCommitChanges={this.commitChanges}
                />
                <IntegratedEditing />
                <AppointmentTooltip 
                    showOpenButton
                    showCloseButton
                />
                <DragDropProvider />
            </Scheduler>
        )
    }
}