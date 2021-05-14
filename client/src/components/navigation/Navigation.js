import { useState } from 'react'
import { 
    AppBar,
    CssBaseline,
    Drawer,
    Hidden,
    Grid,
    IconButton,
    Toolbar,
    Typography,
    Tabs,
    Tab,
    useTheme, } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './styles'

function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Navigation = (props) => {
    const { window } = props;
    const theme = useTheme();
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const pages = props.pages
    //const [page, setPage] = useState(props.page);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handlePageSelect = (event, selectedPage) => {
        props.setPage(selectedPage);
    };


    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Grid container>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon fontSize='large'/>
                    </IconButton>
                    <Typography variant="h5" noWrap>
                        {pages[0].value}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid item xs={2}>
                <nav className={classes.drawer} aria-label="pages">
                    {/* The implementation can be swapped from css to js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="js">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                            paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            <Tabs
                                className={classes.drawer}
                                orientation="vertical"
                                variant="scrollable"
                                value={props.page}
                                onChange={handlePageSelect}
                                aria-label="Pages"
                                indicatorColor="primary"
                                >
                                <Tab label="Home" {...a11yProps(0)} />
                                <Tab label="Schedule" {...a11yProps(1)} />
                                <Tab label="Employees" {...a11yProps(2)} />
                            </Tabs>
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="js">
                        <Drawer
                            classes={{paper: classes.drawerPaper,}}
                            variant="permanent"
                            open
                            >
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={props.page}
                                onChange={handlePageSelect}
                                aria-label="Pages"
                                indicatorColor="primary"
                            >
                                <Tab label="Home" {...a11yProps(0)} />
                                <Tab label="Schedule" {...a11yProps(1)} />
                                <Tab label="Employees" {...a11yProps(2)} />
                            </Tabs>
                        </Drawer>
                    </Hidden>
                </nav>
            </Grid>
            <Grid item container sm={10} xs={12} className={classes.employeeGrid}>
                <Grid item >
                    {pages[props.page]}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Navigation
