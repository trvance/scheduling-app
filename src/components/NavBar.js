import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Container from '@material-ui/core/Container'
import { Link, } from 'react-router-dom'
import logo from './images/avacado.png'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: theme.palette.background.default,
    },
    navbarLinks: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        color: theme.palette.primary.main,
        fontSize: '1.3rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginRight: '2rem',
        marginLeft: '2rem',
        '&:hover': {
            color: theme.palette.primary.light,
        },
    },
}))

const NavBar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar className={classes.navbar} position='sticky'>
                <ToolBar>
                    <Link to='/home'>
                        <img src={ logo } className='navbar-logo' alt='logo'/>
                    </Link>
                        <Container className={classes.navbarLinks}>
                            <Link className={classes.link} to='/home'>
                                Home
                            </Link>
                            <Link className={classes.link} to='/schedule' >
                                Schedule
                            </Link>
                            <Link className={classes.link} to='/employees'>
                                Employees
                            </Link>
                        </Container>
                    <Link className='navbar-sign-in-logo' to='/sign-in'>
                        <Typography class='material-icons md-36'>account_box</Typography>
                    </Link>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavBar
