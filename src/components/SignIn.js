import lime from './images/lime.svg'
import { useState } from 'react'
import { makeStyles, } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import StyledTextField from './styledComponents/StyledTextField.js'
import StyledButton from './styledComponents/StyledButton.js'

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
      },
      '& MuiInputBase-root': {
          color: 'white',
      }
}))

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
            </Grid>      
        </Grid>
    )
}

export default Home
