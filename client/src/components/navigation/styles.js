import { makeStyles } from '@material-ui/core'

const drawerWidth = 150;
const desktopWidth = 200;

export default makeStyles((theme) => ({
  root: {
    
  },
  employeeGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 90,
    [theme.breakpoints.down('sm')]: {
      marginTop: 80,
      marginBottom: 90,
    },
  },
  drawer: {
      //width: drawerWidth,
  },
  appBar: {
    background: theme.palette.background.default,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: desktopWidth,
      display: 'none',
    },
  },
  menuButton: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: desktopWidth,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: theme.palette.background.default,
    border: 0,
    [theme.breakpoints.up('sm')]: {
      width: desktopWidth,
    },
  },
  tabHighlightColor: {
    backgroundColor: theme.palette.primary.main,
  },
}))