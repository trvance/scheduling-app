import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactCardFlip from 'react-card-flip'
import { Box, Card, Container, Grid, makeStyles, Grow, Paper, CardMedia, Slide, Button } from '@material-ui/core'
import Image from 'material-ui-image'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import vectorAvacado from '../../images/simpleAvocado.png'
import calendarImage from '../../images/weekly-calendar-page-symbol.png'
import leafyAvocado from '../../images/avocado-leafy.png'
import GenerateScheduleButton from './generateScheduleButton/GenerateScheduleButton'
import shifts from '../../testData/weekShifts'
import theme from '../../themes/mintTheme'


const HomePage = ({setPage}) => {
    const classes = useStyles()
    const employees = useSelector((state) => state.employees)
    const dispatch = useDispatch()
    const date = new Date()

    return (
        //<div className={classes.root}>
            <Grid className={classes.cardDisplay} container direction='column' justify='center' alignItems='center' spacing={0}>
                <CardMedia className={classes.titleCard} image={calendarImage}>
                    <Typography className={classes.title}>Surcheerios</Typography>
                    <Slide in direction='left' timeout={500}>
                        <img className={classes.logo} src={leafyAvocado}/>
                    </Slide>
                </CardMedia>
                <GenerateScheduleButton setPage={setPage} />
                <Button style={{ color:theme.palette.secondary.main, backgroundColor:theme.palette.background.paper, width: 250, height: 50 }} variant='contained'>
                    Add Employee
                </Button>
            </Grid>
        //</div>
    )
}

export default HomePage