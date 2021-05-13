import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Menu, MenuItem, IconButton, Fade } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import * as POSITIONS from '../../../constants/positions'

const DropDownMenuPositions = ({setSelectedPosition}) => {
    const employees = useSelector((state) => state.employees)
    const ITEM_HEIGHT = 48
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    
    const handleClose = (event) => {
        setAnchorEl(null);
    }
    
    const menuItemClick = (event) => {
        const name = event.target.innerText

        if(event) {
            const fullEmployee = employees.find((employee) => {
                const position = employee.position
    
                if(position.trim() === name.trim()){
                    return employee
                }
    
            })
            setSelectedPosition(fullEmployee)
        }
        
        handleClose()
    }


    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
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
                    {employee.position}
                </MenuItem>
            ))}
            </Menu>
        </div>
    )
}

export default DropDownMenuPositions
