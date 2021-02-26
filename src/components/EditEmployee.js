import StyledTextField from './styledComponents/StyledTextField.js'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'

const EditEmployee = (theme) => {
    return (
        <div>
            <Card>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ marginTop: '2vh', padding: '2rem'}}
                >
                    <form noValidate autoComplete='off'>
                        <div>
                            <StyledTextField 
                                label='First Name' 
                                required
                                variant='filled'
                                color='secondary'
                            />
                        </div>
                        <div>
                            <StyledTextField 
                                label='M.I.' 
                                inputProps={{ maxLength: '1'}}
                                variant='filled'
                                color='secondary'
                            />
                        </div>
                        <div>
                            <StyledTextField 
                                label='Last Name' 
                                required
                                variant='filled'
                                color='secondary'
                            />
                        </div>
                        <div>
                            <StyledTextField 
                                label='Phone Number' 
                                required
                                variant='filled'
                                color='secondary'
                            />
                        </div>
                        <div>
                            <StyledTextField 
                                label='Email' 
                                required
                                variant='filled'
                                color='secondary'
                            />
                        </div>
                    </form>
                </Grid>
            </Card>
        </div>
    )
}

export default EditEmployee
