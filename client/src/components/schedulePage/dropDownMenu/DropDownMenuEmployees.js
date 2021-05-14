import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Menu, MenuItem, IconButton, Fade, Button } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'


const DropDownMenuEmployees = ({selectedEmployee, setSelectedEmployee}) => {
    const employees = useSelector((state) => state.employees)
    const ITEM_HEIGHT = 50
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    let fullName = selectedEmployee ? selectedEmployee.firstName + " " + selectedEmployee.lastName : ""

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    
    const handleClose = (event) => {
        setAnchorEl(null);
    }
    
    const menuItemClick = (event) => {
        const name = event.target.innerText

        if(name) {
            const fullEmployee = employees.find((employee) => {
                const fullName = `${employee.firstName} ${employee.lastName}`
    
                if(fullName.trim() === name.trim()){
                    return employee
                }

            })
            setSelectedEmployee(fullEmployee)
        }
        handleClose()
    }


    return (
        <div>
            <Button
                style={{height:45, width:250, fontSize:18}}
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                startIcon={<PersonOutlineIcon color='secondary' style={{fontSize:25}}/>}
            >
                {fullName}
            </Button>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                // value={option}
                open={open}
                onClose={handleClose}
                onClick={menuItemClick}
                
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '40ch',
                    },
                }}
            >
            {employees.map((employee) => (
                <MenuItem key={employee._id} value={employee._id} >
                    {employee.firstName} {employee.lastName}
                </MenuItem>
            ))}
            </Menu>
        </div>
    )
}

export default DropDownMenuEmployees
