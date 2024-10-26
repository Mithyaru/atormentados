import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicial from './components/Inicial';
import Nav from './components/Nav';
import Jogo from './components/Jogo';

function App() {
  

  return (
    <>
    <Router>
    <div className='app'>
    <Nav></Nav>
    <div className='container-app'>
      
        <Routes>
          <Route path='/' element={<Inicial></Inicial>}></Route>
          <Route path='/jogo' element={<Jogo></Jogo>}></Route>
        </Routes>
      
      </div>
    </div>
    </Router>
    </>
  )
}

export default App
