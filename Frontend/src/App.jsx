import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/navbar'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import EventHandling from './components/EventHandling'
import {SnackbarProvider} from 'notistack'
const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
          <navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/EventHandling' element={<EventHandling />} />
          </Routes>
          </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default Appj