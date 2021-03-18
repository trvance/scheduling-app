import './App.css';
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import SignIn from './components/SignIn.js'
import Schedule from './components/Schedule.js'
import CssBaseline from '@material-ui/core/CssBaseline'
import EmployeesView from './components/EmployeesView.js'
import Employee from './components/Employee.js'
import theme from './components/theme.js'
import {  ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useState } from 'react'
import Box from '@material-ui/core/Box'

function App() {
  const [employee, setEmployee] = useState(<Employee/>)
  const [employees, setEmployees ] = useState([])
  const isUserAuthenticated = false
  const [count, setCount] = useState(0)
  
  const addEmployee = (props) => {
    const newEmployee = <Employee 
      key={count}
      firstName={props.firstName}
      lastName={props.lastName}
      email={props.email}
      position={props.position}
      phoneNumber={props.phoneNumber}
    />
    setEmployees([...employees, newEmployee])
    setCount(count+1)
  }
  
  const removeEmployee = () => {
    const temp = [...employees]
    temp.splice(0,1)
    setEmployees(temp)
  }

  const homeButton = () => {
    setCount(count+1)
  }
  
  return (
    <Router>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
          <NavBar />

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
          {/* <Route path='/home' component={ Home } /> */}
          <Route path='/home'>
            <Home count={count} click={homeButton}/>
          </Route>
          <Route path='/schedule' component={ Schedule } />
          <Route path='/employees'>
            <EmployeesView employees={employees} addEmployee={addEmployee} employee={employee}/>
          </Route>  
          
      </ThemeProvider>
    </Router>
  );
}

export default App;
