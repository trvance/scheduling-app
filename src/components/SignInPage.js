import lime from './images/lime.svg'
import { useState } from 'react'
import { makeStyles, } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import clsx from 'clsx'
import Container from '@material-ui/core/Container'
import StyledTextField from './styledComponents/StyledTextField.js'
import StyledButton from './styledComponents/StyledButton.js'

const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        padding:'2rem',
    },
    card: {
        maxWidth: '95vh', 
        borderRadius: '10px',
        boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, .7)',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        marginRight: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.short,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
}))

const Home = () => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Container className={classes.center}>
            <Card className={classes.card}>
                <CardContent>
                    <img src={ lime } className='App-logo' alt='logo' />
                </CardContent>
                <CardContent>
                    <StyledButton 
                        style={{width:'12rem'}} 
                        onClick={handleExpandClick}>
                            SIGN IN
                    </StyledButton>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="sign in"
                    >
                        <ExpandMoreIcon style={{ color: 'lightgray' }} />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <div>
                            <StyledTextField 
                                variant='filled' 
                                color='secondary' 
                                label='Username' 
                                required='true'
                            />
                        </div>
                        <div>
                            <StyledTextField 
                                variant='filled' 
                                color='secondary' 
                                label='Password' 
                                required='true'
                                style={{marginBottom: '1rem'}}
                            />
                        </div>
                    </CardContent>
                </Collapse>
            </Card> 
        </Container>
    )
}

export default Home
