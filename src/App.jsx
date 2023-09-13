import { useState } from 'react'
import { Routes, Route, } from 'react-router-dom'

// pages imports
import Home from './pages/Home';
import Movies from './pages/Movies';
// css import
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/movie/:id' element={<Movies />}></Route>
      <Route path='/movies' element={<Movies />}></Route>
      
    </Routes>
  )
}

export default App;
