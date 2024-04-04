import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import navbar from './components/navbar.jsx'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
            <Route path="/navbar " element={<navbar />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App