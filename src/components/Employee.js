import { makeStyles } from '@material-ui/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Box from '@material-ui/core/Box'
import Carousel from 'react-material-ui-carousel'
import Card from '@material-ui/core/Card'


const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '3px',
        boxShadow: '0 3px 3px 0 rgba(30, 30, 30, .7)',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '60vw',
        },
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: theme.typography.fontWeightRegular,
    },
    carouselPage: {
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '57vw'
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        height: '19rem',
        [theme.breakpoints.down('sm')]: {
            width: '15rem',
        },
        [theme.breakpoints.up('md')]: {
            width: '20rem',
        },
        justifyItems: 'center',
        alignItems: 'center',
        backgroundColor: '#555555',
        boxShadow: '3px 5px 7px 1px rgba(20,20,20, .7)',
        borderRadius: '10px',
    },
    cardTitle: {
        fontSize: '1.2rem',
        // fontFamily: 'Poppins',
        
        // textShadow: '2px 2px #242424',
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: '0rem',
        lineHeight: '3rem',
    },
    cardTitleBackground: {
        backgroundImage:'linear-gradient(0deg, #353535 30%, #424242 120%)',
        height: '3rem',
        marginTop: '0rem',
    }
}))

const Employee = (props) => {
    const classes = useStyles()

    return (
            <Accordion className={classes.root} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color='secondary'/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{props.firstName} {props.lastName}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.expandView}>
                    <Carousel 
                        animation='slide' 
                        autoPlay={false}
                        className={classes.carouselPage}
                    >
                        <Card className={classes.card}>
                            <div className={classes.cardTitleBackground}>
                                <h2 className={classes.cardTitle}>Info</h2>
                            </div>
                            <Typography>{props.firstName} {props.lastName}</Typography> 
                            <p>{props.position}</p> 
                        </Card>
                    
                    
                        <Card className={classes.card}>
                            <div className={classes.cardTitleBackground}>
                                <h2 className={classes.cardTitle}>Availability</h2>
                            </div>
                        </Card>
                        <Card className={classes.card}>
                            <Box>
                                
                            <div className={classes.cardTitleBackground}>
                                <h2 className={classes.cardTitle}>Contact</h2>
                            </div>
                            <p>{props.phoneNumber}</p>
                            <p>{props.email}</p>
                            </Box>
                        </Card>
                        
                    </Carousel>
                </AccordionDetails>
            </Accordion>
    )
}

export default Employee
