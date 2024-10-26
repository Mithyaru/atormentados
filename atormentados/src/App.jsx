import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicial from './components/Inicial';
import Quiz from './components/Quiz';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Inicial></Inicial>}></Route>
          <Route path='/quiz' element={<Quiz></Quiz>}></Route>
          <Route path='/' element={''}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
