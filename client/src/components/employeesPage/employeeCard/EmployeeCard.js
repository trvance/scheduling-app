import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { deleteEmployee } from '../../../actions/employees'
import { Card, Container, Divider, Button, Typography, IconButton, Slide } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import contactButtonImage from '../../../images/more.svg'
import useStyles from './styles'

const EmployeeCard = ({employee}) => {
    const classes = useStyles()
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
            <Card className={classes.card}>
                <Container className={classes.cardFrontTop}>
                    <Typography gutterBottom className={classes.cardTitle} textOverflow="ellipsis">{employee.firstName} {employee.lastName}</Typography>
                    <Divider className={classes.divider}/>
                </Container>
                <Slide direction="down" in >
                    <Container className={classes.cardFrontDetails}>
                        <Typography style={{fontSize: 14, color: 'lightgray'}} variant="body2">{employee.positions.join(", ")}</Typography>
                    </Container>
                </Slide>
                <Slide direction="up" in>
                    <Container className={classes.flipButtonFrontArea}>
                        <IconButton style={{marginBottom: 30}} onClick={() => setIsFlipped(true)}>
                            {/* <img style={{width: 30}} src={contactButtonImage} /> */}
                            <AccountCircleIcon/>
                        </IconButton>
                    </Container>
                </Slide>
            </Card>
            <Card className={classes.cardBack} >
                <Container className={classes.cardBackContent}>
                    
                        <Typography className={classes.cardBackContent}>{employee.phoneNumber}</Typography>
                    
                        <Typography className={classes.cardBackContent}>{employee.email}</Typography>
                    
                    <IconButton style={{position: 'absolute', background: 'transparent', bottom:-4}} onClick={ () => setIsFlipped(false) }>
                        <ArrowBackIcon  />
                    </IconButton>
                </Container>
            </Card>
        </ReactCardFlip>
    )
}

export default EmployeeCard
