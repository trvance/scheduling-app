import './App.css';
import Home from './components/HomePage.js'
import NavBar from './components/NavBar.js'
import SignIn from './components/SignInPage.js'
import Schedule from './components/SchedulePage.js'
import CssBaseline from '@material-ui/core/CssBaseline'
import EmployeesPage from './components/EmployeesPage.js'
import theme from './themes/theme'
import mintTheme from './themes/mintTheme'
import {  ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useState } from 'react'
import { testEmployees } from './testData/testEmployees'
import { appointments } from './testData/testTimes'
import { Container } from '@material-ui/core'

function App() {
  const [employees, setEmployees] = useState(testEmployees)
  const [employeesSchedules, setEmployeesSchedules] = useState(testEmployees.weekSchedule)
  
  const isUserAuthenticated = false

  const setEmployee = ({employee}) => {
    const newEmployee = {
      firstName: employee.firstName,
      middleInitial: employee.middleInitial,
      lastName: employee.lastName,
      email: employee.email,
      phoneNumber: employee.phoneNumber,
      tenure: employee.startDate,
      positions: [employee.position],
      availability: [employee.availability],
      desiredHours: employee.desiredHours,
    }
    setEmployees([...employees, newEmployee])
  }

  
  return (
    <Router>
      <ThemeProvider theme={ mintTheme }>
        <CssBaseline />
          <NavBar/>
          <Route
            exact
            path="/"
            render={() => {
                return (
                  isUserAuthenticated ?
                  <Redirect to="/home" /> :
                  <Redirect to="/sign-in" /> 
                )
            }}
          />
          <Route path='/sign-in' component={ SignIn } />
          <Route path='/home'>
            <Home employee={testEmployees[0]}/>
          </Route>
          <Route path='/schedule'>
            <Schedule employeesSchedules={employeesSchedules} />
          </Route>
          <Route path='/employees'>
            <EmployeesPage employees={employees} addEmployee={setEmployee} />
          </Route>  
      </ThemeProvider>
    </Router>
  );
}

export default App;
