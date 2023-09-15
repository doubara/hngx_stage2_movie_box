import { useState } from 'react'
import { Routes, Route, } from 'react-router-dom'

// pages imports
import Home from './pages/Home';
import Movies from './pages/Movies';
import SearchMovie from './pages/SearchMovie';
// css import
import './App.css'

function App() {

  return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route path='/movies/:id' element={<Movies />}></Route>
      <Route path='/search/:id' element={<SearchMovie />} ></Route>
      <Route path='*' element={<Home />}></Route>
    </Routes>
  )
}

export default App;
