import { Card, Grid, Typography, IconButton} from '@material-ui/core'
import DayIcon from '@material-ui/icons/WbSunnyTwoTone'
import NightIcon from '@material-ui/icons/NightsStayTwoTone'
import { useState, useEffect } from 'react'

const AvailabilityComponent = ({ employee, getAvailability }) => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    const [availability, setAvailability] = useState(employee.availability)

    useEffect(() => {
        if(employee)setAvailability(employee.availability)
    }, [employee])

    
    const handleDayButton = (index) => e => {
        const newAvailability = [...availability]
        newAvailability[index].morning = !availability[index].morning
        setAvailability(newAvailability)
        getAvailability(newAvailability)
    }
    
    const handleNightButton = (index) => e => {
        const newAvailability = [...availability]
        newAvailability[index].evening = !availability[index].evening
        setAvailability(newAvailability)
        getAvailability(newAvailability)
    }

    return (
        <Grid container justify="center" direction="column" align="center" xs={12} spacing={0}>
            
            <Grid item container justify="space-around" direction="row"  spacing={0}>
                <Typography gutterBottom>Mon</Typography>
                <Typography>Tue</Typography>
                <Typography >Wed</Typography>
                <Typography style={{paddingRight: 8}}>Thu</Typography>
                <Typography style={{paddingRight: 10}}>Fri</Typography>
                <Typography style={{paddingRight: 8}}>Sat</Typography>
                <Typography>Sun</Typography>
            </Grid>

            <Grid item container justify="space-around" direction="row" spacing={0}>
                {availability.map((day, index) => {

                    return(
                        <IconButton
                            value={day.morning}
                            name={day.day}
                            size="small"
                            style={{marginBottom: 15}}
                            onClick={handleDayButton(index)}
                        >
                            {day.morning ?
                                <DayIcon color="secondary" /> :
                                <DayIcon color="disabled" /> 
                            }
                        </IconButton>
                    )

                })}
            </Grid>


            <Grid item container justify="space-around" direction="row" spacing={0}>
                {availability.map((day, index) => {

                    return(
                        <IconButton
                            value={day.evening}
                            name={day.day}
                            size="small"
                            style={{marginBottom: 15}}
                            onClick={handleNightButton(index)}
                        >
                            {day.evening ?
                                <NightIcon color="secondary" /> :
                                <NightIcon color="disabled" /> 
                            }
                        </IconButton>
                    )
                    
                })}
            </Grid>

        </Grid>
    )
}

export default AvailabilityComponent
