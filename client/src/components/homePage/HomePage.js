import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactCardFlip from 'react-card-flip'
import { Box, Card, Container, Grid, makeStyles, Grow, Paper, CardMedia, Slide, Button } from '@material-ui/core'
import useStyles from './styles'
import calendarImage from '../../images/weekly-calendar-page-symbol.png'
import Surcheerios from '../../images/Surcheerios.png'
import leafyAvocado from '../../images/avocado-leafy.png'
import GenerateScheduleButton from './generateScheduleButton/GenerateScheduleButton'
import theme from '../../themes/mintTheme'


const HomePage = ({setPage, setAddEmployee}) => {
    const classes = useStyles()

    const handleAddEmployeeButton = () => {
        setPage(2)
        setAddEmployee(true)
    }

    return (
        <Grid container className={classes.root} direction='column' justify='center' alignItems='center' spacing={0}>
            <Grid item xs={12}>
                <CardMedia className={classes.titleCard} image={Surcheerios}>
                    <Slide in direction='left' timeout={500}>
                        <img className={classes.logo} src={leafyAvocado}/>
                    </Slide>
                </CardMedia>
            </Grid>
            <Grid item xs={12}>
                <GenerateScheduleButton setPage={setPage} />
            </Grid>
            <Grid item xs={12}>
                <Button style={{ color:theme.palette.secondary.main, backgroundColor:theme.palette.background.paper, width: 250, height: 50 }} variant='contained' onClick={handleAddEmployeeButton}>
                    Add Employee
                </Button>
            </Grid>
        </Grid>

    )
}

export default HomePage