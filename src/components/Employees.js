import { makeStyles } from '@material-ui/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import EditEmployee from './EditEmployee.js'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
    },
    main: {
        flex: 1,
        paddingBottom: '2rem'
    }
}))

const Employees = () => {
    const classes = useStyles()

    return (
        <Container className={classes.main}>
            <Container maxWidth='md'>
                <h1>Employees</h1>
                    <Accordion className={classes.root}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color='secondary'/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Employee 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <EditEmployee />
                        </AccordionDetails>
                        <Button variant='contained' color='secondary' style={{marginBottom:'1rem'}}>
                            Edit Employee
                        </Button>
                    </Accordion>
                    <Accordion className={classes.root}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color='secondary' />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Employee 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <EditEmployee />
                        </AccordionDetails>
                        <Button variant='contained' color='secondary' style={{marginBottom:'1rem'}}>
                            Edit Employee
                        </Button>
                    </Accordion>
                    <Accordion className={classes.root}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color='secondary'/>}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography className={classes.heading}>Employee 3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <EditEmployee />
                        </AccordionDetails>
                        <Button variant='contained' color='secondary' style={{marginBottom:'1rem'}}>
                            Edit Employee
                        </Button>
                    </Accordion>
            </Container>
        </Container>
    )
}

export default Employees
