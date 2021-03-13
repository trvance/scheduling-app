import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import { Link, } from 'react-router-dom'
import logo from './images/avacado.png'

const NavBar = () => {
    return (
        <div>
            <AppBar color='primary' position='sticky'>
                <ToolBar>
                    <Link to='/home'>
                        <img src={ logo } className='navbar-logo' alt='logo'/>
                    </Link>
                    <div className='navbar-nav'>
                        <div className='navbar-links'>
                            <Link to='/home' style={{ color: '#cddc39', fontWeight: 'bold', textDecoration: 'none', marginRight: '2rem',}}>
                                <span className='navbar-link'>Home</span>
                            </Link>
                            <Link to='/schedule' style={{ color: '#cddc39', fontWeight: 'bold', textDecoration: 'none', marginRight: '2rem',}}>
                                <span className='navbar-link'>Schedule</span>
                            </Link>
                            <Link to='/employees' style={{ color: '#cddc39', fontWeight: 'bold', textDecoration: 'none'}}>
                                <span className='navbar-link'>Employees</span>
                            </Link>
                        </div>
                    </div>
                    <Link className='navbar-sign-in-logo' to='/sign-in'>
                        <span class='material-icons md-36'>account_box</span>
                    </Link>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavBar
