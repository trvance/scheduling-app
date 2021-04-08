import './App.css';
import Home from './components/homePage/HomePage.js'
import NavBar from './components/navBar/NavBar.js'
import SignIn from './components/signInPage/SignInPage.js'
import Schedule from './components/schedulePage/SchedulePage.js'
import CssBaseline from '@material-ui/core/CssBaseline'
import EmployeesPage from './components/employeesPage/EmployeesPage.js'
import theme from './themes/theme'
import mintTheme from './themes/mintTheme'
import {  ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { testEmployees } from './testData/testEmployees'
import { Container } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getEmployees } from './actions/employees'

const App = () => {
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)
  const [employees, setEmployees] = useState(testEmployees)
  const [employeesSchedules, setEmployeesSchedules] = useState(testEmployees.weekSchedule)

  useEffect(() => {
    dispatch(getEmployees())
  }, [currentId, dispatch])
  
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
            <EmployeesPage employees={employees} />
          </Route>  
      </ThemeProvider>
    </Router>
  );
}

export default App;
