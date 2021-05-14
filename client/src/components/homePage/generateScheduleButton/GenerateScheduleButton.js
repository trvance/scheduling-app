import { Button, Typography, Grid } from "@material-ui/core"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editEmployee, getEmployees } from '../../../actions/employees'
import weekShifts from '../../../testData/weekShifts'
import theme from '../../../themes/mintTheme'


const GenerateScheduleButton = ({setPage}) => {
    let shifts = weekShifts
    const dispatch = useDispatch()
    const employees = useSelector((state) => state.employees)
    let scheduledEmployees = []
    let excessShifts = []
    const [employee, setEmployee] = useState(null)
    const [schedule, setSchedule] = useState(null)
    const [scheduleStack, setScheduleStack] = useState([])
    const [currentId, setCurrentId] = useState(null)
    const NOON = 12


    const randomizeShifts = (array) => {
        let shuffledArray = []

        let shift = null

        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            shift = array[i]

            for (let x = shift.length - 1; x >= 0; x--) {
                const y = Math.floor(Math.random() * (x + 1));
                [array[i][x], array[i][y]] = [array[i][y], array[i][x]];
                shift = array[i][x]
                shuffledArray.push(shift)
            }
        }
        return shuffledArray
    }


    const randomizeEmployees = (array) => {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }


    const createSchedule = (shifts) => {
        let i = 0
        let dayOff = []
        scheduledEmployees = []
        excessShifts = []
        let blankEmployees = eraseSchedules(employees)
        randomizeEmployees(blankEmployees)

        blankEmployees.forEach((employee) => {
            let randomDay = Math.floor(Math.random() * 7)
            dayOff.push(randomDay)
        })
        
        while(shifts.length > 0) {
            let randomShift = Math.floor(Math.random() * shifts.length)
            let shift = shifts[randomShift]

            let currentEmployee = blankEmployees[i]
            let currentDayOff = dayOff[i]
            let currentEmployeeId = currentEmployee._id
            
            const isEmployeeAvailable = canEmployeeTakeShift(currentEmployee, shift, currentDayOff)

            if(isEmployeeAvailable && 
                (currentEmployee.numHours <= currentEmployee.desiredHours.replace(/\D/g, "").slice(-2) ||
                currentEmployee.desiredHours.replace(/\D/g, "").slice(-2) >= 40)) 
                {
                    currentEmployee.weekSchedule.push(shift)
                    calculateNumHours(currentEmployee, shift)
                    shifts.splice(randomShift,1)

                    if(!scheduledEmployees.some((employee) => employee._id === currentEmployeeId)){
                        scheduledEmployees.push(currentEmployee)
                    }

            }
            else {
                if (i < blankEmployees.length - 1) {
                    i++
                }
                else {
                    i=0
                    excessShifts.push(shift)
                    shifts.splice(randomShift,1)
                }
            }

        }
    }


    const canEmployeeTakeShift = (employee, shift, currentDayOff) => {
        const date = new Date(shift.startDate)
        const dayOfWeek = date.getDay()
        const shiftStartTime = convertTimeToNumber(shift.startDate.split(' ').[4])
        const day = shift.startDate.split(' ').[0]
        const availabilityDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1
        const isAvailableMorning = employee.availability[availabilityDay].morning
        const isAvailableEvening = employee.availability[availabilityDay].evening
        const isMorningShift = shiftStartTime < NOON ? true : false
        const isAlreadyWorking = checkIfWorking(employee, day, isMorningShift)
        const isTrained = checkIfTrained(employee, shift)

        return isAlreadyWorking ? false
                : !isTrained ? false
                : dayOfWeek == currentDayOff ? false
                : isMorningShift && isAvailableMorning ? true
                : !isMorningShift && isAvailableEvening ? true
                : false
    }


    const checkIfWorking = (employee, day, isMorningShift) => {
        let numShiftsInDay = 0
        employee.weekSchedule.forEach((shift) => {
            if( shift.startDate.includes(day) ) {
                numShiftsInDay++
            }
        })
        if( numShiftsInDay > 1 ) return true
        
        const employeeShift = employee.weekSchedule.find( shift => shift.startDate.includes(day) )

        if ( employeeShift ) {
            const employeeShiftTime = convertTimeToNumber( employeeShift.startDate.split(' ').[4] )

            if(isMorningShift && employeeShiftTime < NOON) return true
            if(isMorningShift && employeeShiftTime > NOON) return false
            if(!isMorningShift && employeeShiftTime > NOON) return true
            if(!isMorningShift && employeeShiftTime > NOON) return false
        }

        return false
        
    }


    const calculateNumHours = (employee, shift) => {
        let startTime = convertTimeToNumber(shift.startDate.split(' ').[4])
        let endTime = convertTimeToNumber(shift.endDate.split(' ').[4])
        let shiftHours = endTime - startTime
        employee.numHours += shiftHours
    }


    const checkIfTrained = (employee, shift) => {
        const position = shift.title
        let isTrained = false

        employee.positions.forEach((pos) => {
            if(position.trim()===pos.trim()) {
                isTrained = true
            }
        })
        return isTrained
    }


    const convertTimeToNumber = (time) => {
        var hoursMinutes = time.split(/[.:]/);
        var hours = parseInt(hoursMinutes[0], 10);
        var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
        return hours + minutes / 60;
    }


    const saveEmployees = ( scheduledEmployees ) => {
        scheduledEmployees.forEach(( employee ) => {
            dispatch( editEmployee( employee._id, employee ))
        })
    }


    const eraseSchedules = (employees) => {
        let blankEmployees = []
        employees.forEach((employee) => {
            let tempEmployee = {...employee, weekSchedule:[], numHours: 0}
            blankEmployees.push(tempEmployee)
        })
        return blankEmployees
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let randomShiftsArray = randomizeShifts(shifts)
            createSchedule(randomShiftsArray)
            console.log(scheduledEmployees)
            console.log(excessShifts)
            // setScheduleStack([...scheduleStack, scheduledEmployees] )
            saveEmployees( scheduledEmployees )
            setPage(1) 
        } catch (error) {
            console.log("No employees to generate schedule with")
        }
    }

    
    return (
        <Grid container direction='column' justify='center' alignItems='center'>
            <Button style={{ color:theme.palette.primary.main, backgroundColor:theme.palette.background.paper, width: 250, height: 50, marginTop:45, marginBottom:20}} variant='contained' onClick={ handleSubmit }>
                Generate Schedule
            </Button>
        </Grid>
    )
}

export default GenerateScheduleButton
