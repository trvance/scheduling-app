import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { deleteEmployee } from '../../../actions/employees'
import { Card, Container, Grid, Divider, Button, Typography, IconButton, Slide } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import contactButtonImage from '../../../images/more.svg'
import useStyles from './styles'

const EmployeeCard = ({employee}) => {
    const classes = useStyles()
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
            
            <Card className={classes.card} >
                <Button style={{position: 'absolute', opacity: 0, height: 200, width: 200}} onClick={() => setIsFlipped(true)} />
                <Container className={classes.cardFrontTop}>
                    <Typography gutterBottom className={classes.cardTitle} textOverflow="ellipsis">{employee.firstName} {employee.lastName}</Typography>
                    <Divider className={classes.divider}/>
                </Container>
                <Slide direction="down" in >
                    <Container className={classes.cardFrontDetails}>
                        <Typography style={{fontSize: 14, color: 'lightgray'}} variant="body2">{employee.positions.join(", ")}</Typography>
                    </Container>
                </Slide>
            </Card>

            <Card className={classes.cardBack} >
                <Grid container className={classes.cardBackContent} >
                    <Button style={{position: 'absolute', opacity: 0, height: 200, width: 200}} onClick={() => setIsFlipped(false)} />
                        <Grid container item direction='column' justify='center'>
                            <Typography className={classes.backInfoTitle} variant='body2'>Phone Number</Typography>
                            <Typography className={classes.cardBackInfo}>{employee.phoneNumber}</Typography>
                        </Grid>
                        <Grid container item direction='column' justify='center'>
                            <Typography className={classes.backInfoTitle} variant='body2'>Email</Typography>
                            <Typography className={classes.cardBackInfo}>{employee.email}</Typography>
                        </Grid>
                        <Grid container item direction='column' justify='center'>
                            <Typography className={classes.backInfoTitle} variant='body2'>Desired Hours</Typography>
                            <Typography className={classes.cardBackInfo}>{employee.desiredHours}</Typography>
                        </Grid>
                        <Grid container item direction='column' justify='center'>
                            <Typography className={classes.backInfoTitle} variant='body2'>Scheduled Hours</Typography>
                            <Typography className={classes.cardBackInfo}>{employee.numHours}</Typography>
                        </Grid>
                </Grid>
            </Card>
            
        </ReactCardFlip>
    )
}

export default EmployeeCard
