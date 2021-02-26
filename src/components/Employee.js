import { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import EditEmployee from './EditEmployee.js'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: '3px',
        boxShadow: '0 3px 3px 0 rgba(30, 30, 30, .7)',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
        }
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: theme.typography.fontWeightRegular,
    },
    main: {
        flex: 1,
        paddingBottom: '2rem',
    }
}))

const Employee = () => {
    const classes = useStyles()

    return (
        <Box 
            display='flex'
            alignItems='center'
            justifyContent='center'
        >

            <Accordion className={classes.root} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color='secondary'/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Employee</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <EditEmployee />
                </AccordionDetails>
                <Button variant='contained' color='secondary' style={{marginBottom:'1rem'}}>
                    Edit Employee
                </Button>
            </Accordion>
        </Box>
    )
}

export default Employee
