import StyledButton from './styledComponents/StyledButton.js'
import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const homeStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    }
}))

const Home = ({count, click}) => {
    const classes = homeStyles()
    return (
        <Container className={classes.root}>
            <Typography variant='h3'>Home Page</Typography>
            <StyledButton onClick={click}>
                Count
            </StyledButton>
            <Typography >{count}</Typography>
        </Container>
    )
}

export default Home