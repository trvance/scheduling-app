import lime from './images/lime.svg'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
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
      textField: {
          color: 'white',
      }
}))

const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #99aa00 30%, #ffff6e 90%)',
        borderRadius: 3,
        border: 0,
        color: 'black',
        height: 48,
        padding: '0 60px',
        boxShadow: '0 3px 5px 2px rgba(45, 45, 45, .4)',
    },
    label: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
})(Button);

const Home = () => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ marginTop: '2vh', padding: '2rem'}}
        >
            <Grid item sm={10}>
                <Card style={{ 
                        maxWidth: '95vh', 
                        backgroundColor: '#424242', 
                        borderRadius: '20px',
                        boxShadow: '0 3px 3px 0 rgba(30, 30, 30, .7)'
                    }}>
                    <CardContent>
                        <img src={ lime } className='App-logo' alt='logo' />
                    </CardContent>
                    <CardContent>
                        <StyledButton onClick={handleExpandClick}>SIGN IN</StyledButton>
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
                                <TextField variant='filled' color='secondary' label='Username' required='true'/>
                            </div>
                            <div>
                                <TextField variant='filled' color='secondary' label='Password' required='true'/>
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>      
        </Grid>
    )
}

export default Home
