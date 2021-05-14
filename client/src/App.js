import './App.css';
import HomePage from './components/homePage/HomePage.js'
import Navigation from './components/navigation/Navigation.js'
import SignInPage from './components/signInPage/SignInPage.js'
import SchedulePage from './components/schedulePage/SchedulePage.js'
import CssBaseline from '@material-ui/core/CssBaseline'
import EmployeesPage from './components/employeesPage/EmployeesPage.js'
import theme from './themes/theme'
import mintTheme from './themes/mintTheme'
import {  ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEmployees } from './actions/employees'

const App = () => {
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getEmployees())
  }, [currentId, dispatch])
  
  const [page, setPage] = useState(0)
  const [addEmployee, setAddEmployee] = useState(false)
  const pages = [<HomePage setPage={setPage} setAddEmployee={setAddEmployee} />, <SchedulePage/>, <EmployeesPage addEmployee={addEmployee} setAddEmployee={setAddEmployee}/>]

  return (
    <Router>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <ThemeProvider theme={ mintTheme }>
        <CssBaseline />
          <Navigation pages={pages} page={page} setPage={setPage} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
