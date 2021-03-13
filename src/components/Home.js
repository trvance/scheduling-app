import { SettingsCellOutlined, SettingsCellRounded } from '@material-ui/icons'
import { useState } from 'react'
import StyledButton from './styledComponents/StyledButton.js'

const Home = ({count, click}) => {
    return (
        <div>
            <h1>Home Page</h1>
            <StyledButton onClick={click}>
                Count
            </StyledButton>
            {count}
        </div>
    )
}

export default Home
