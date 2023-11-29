import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Login from './Login'
import Register from './Register'

function App() {
  return (
  <Router>
  <Routes>
  <Route path='/' element={<Register/>}></Route>
    <Route path='/Login' element={<Login/>}>{Login}</Route>
    
  </Routes>
  </Router>
  )
}

export default App