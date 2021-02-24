import './calendar.css'
import { useState } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { format } from 'date-fns'
import { subMonths, addMonths, addDays, isSameDay, isSameMonth } from 'date-fns'
import { startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns'


const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())
    
    const renderHeader = () => {
        const dateFormat = 'MMMM yyyy'
        return (
          <div className='header row flex-middle'>
            <div className='col col-start'>
                <div className='icon' onClick={prevMonth}>
                    chevron_left
                </div>
            </div>
            <div className='col col-center'>
                <span>
                    {format(currentMonth, dateFormat)}
                </span>
            </div>
            <div className='col col-end'>
                <div className='icon' onClick={nextMonth}>
                    chevron_right
                </div>
            </div>
          </div>
        )
    }

    const renderDays = () => {
        const deviceWidth = window.innerWidth
        const dateFormat = (deviceWidth>600) ? 'EEEE' : 'E'
        const days = []

        let startDate = startOfWeek(currentMonth)

        for(let i = 0; i <= 6; i++) {
            days.push(
                <div className='col col-center' key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            )
        }

        return(
            <div className='days row'>
                {days}
            </div>
        )
    }

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth)
        const monthEnd = endOfMonth(monthStart)
        const startDate = startOfWeek(monthStart)
        const endDate = endOfWeek(monthEnd)

        const dateFormat = 'd'
        const rows = []

        let days = []
        let day = startDate
        let formattedDate = ''

        while (day <= endDate) {
            for(let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat)
                const cloneDay = day
                
                days.push(
                    <div 
                        className={`col cell ${!isSameMonth(day, monthStart)
                            ? 'disabled'
                            : isSameDay(day, selectedDate) ? 'selected' : ''}`}
                        key={day}
                        onClick={() => onDateClick(cloneDay)}
                    >
                        <span className='number'>{formattedDate}</span>
                        <span className='bg'>{formattedDate}</span>
                    </div>
                )
                day = addDays(day, 1)
            }
            rows.push(
                <div className='row' key={day}>
                    {days}
                </div>
            )
            days = []
        }
        return(
            <div className='body'>
                {rows}
            </div>
        )
    }
    
    const onDateClick = day => {
        setSelectedDate(day)
    }
    
    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1))
    }
    
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1))
    }

    return (
        <Container>
            <div className='calendar'>
                {renderHeader()}
                {renderDays()}
                {renderCells()}
            </div>
        </Container>
    )
}

export default Calendar
