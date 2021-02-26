import { useState } from 'react'
import './App.css';
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import SignIn from './components/SignIn.js'
import Schedule from './components/Schedule.js'
import EditEmployee from './components/EditEmployee.js'
import Employees from './components/Employees.js'
import theme from './components/theme.js'
import {  ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <ThemeProvider theme={ theme }>
        <div className='App'>
          <header className='NavBar'>
            <NavBar />
          </header>
          <Route path='/home' component={ Home } />
          <Route path='/sign-in' component={ SignIn } />
          <Route path='/schedule' component={ Schedule } />
          <Route path='/editEmployee' component={ EditEmployee } />
          <Route path='/employees' component={ Employees } />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
