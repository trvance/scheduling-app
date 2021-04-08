import lime from '../../images/lime.svg'
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
import StyledTextField from '../../components/styledComponents/StyledTextField.js'
import StyledButton from '../../components/styledComponents/StyledButton.js'
import { Button, TextField, Grow } from '@material-ui/core'
import useStyles from './styles'

const Home = () => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Grow in>
            <Container className={classes.center}>
                <Card className={classes.card}>
                    <CardContent>
                        <img src={ lime } className='App-logo' alt='logo' />
                    </CardContent>
                    <CardContent>
                        <Button 
                            variant='contained'
                            color='primary'
                            style={{width:'12rem'}} 
                            onClick={handleExpandClick}>
                                SIGN IN
                        </Button>
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
                                <TextField 
                                    className={classes.textField}
                                    variant='outlined' 
                                    color='primary' 
                                    label='Username' 
                                    required
                                />
                            </div>
                            <div>
                                <TextField 
                                    className={classes.textField}
                                    variant='outlined' 
                                    color='primary' 
                                    label='Password' 
                                    required
                                    style={{marginBottom: '1rem'}}
                                />
                            </div>
                        </CardContent>
                    </Collapse>
                </Card> 
            </Container>
        </Grow>
    )
}

export default Home
