import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { deleteEmployee } from '../../../actions/employees'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import { useDispatch } from 'react-redux'

const EmployeeCard = ({employee}) => {
    const classes = useStyles()
    const [isFlipped, setIsFlipped] = useState()
    const dispatch = useDispatch()

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>

            <Card className={classes.card}>
                <Container className={classes.cardFrontTop}>
                    {employee.firstName} {employee.lastName}
                    <Divider className={classes.divider}/>
                </Container>
                <Container className={classes.cardFrontDetails}>
                    {employee.positions.map((position)=>
                        <li>{position}</li>
                    )}
                </Container>
                <Container className={classes.flipButtonFrontArea}>
                    <Button 
                        className={classes.flipButton} 
                        variant='text'
                        onClick={() => setIsFlipped(!isFlipped)}
                    >
                        Flip Card
                    </Button>
                    <Button 
                        className={classes.flipButton} 
                        variant='text' 
                        onClick={() => dispatch(deleteEmployee(employee._id))}
                    >
                        Delete
                    </Button>
                </Container>
            </Card>
            <Card className={classes.cardBack}>
                <Container className={classes.cardBackContent}>
                    <div>
                        {employee.phoneNumber}
                    </div>
                    <div>
                        {employee.email}
                    </div>
                    <Button 
                        className={classes.flipButton} 
                        onClick={() => setIsFlipped(!isFlipped)}
                        >
                            Flip Card
                    </Button>
                </Container>
            </Card>
        </ReactCardFlip>
    )
}

export default EmployeeCard
