import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Container from '@material-ui/core/Container'
import { NavLink, Link, } from 'react-router-dom'
import logo from '../../images/avacado.png'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useStyles from './styles'

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
                            <NavLink className={classes.link} to='/home'>
                                Home
                            </NavLink>
                            <NavLink className={classes.link} to='/schedule' >
                                Schedule
                            </NavLink>
                            <NavLink className={classes.link} to='/employees'>
                                Employees
                            </NavLink>
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
