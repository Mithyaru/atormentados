import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicial from './components/Inicial';
import Nav from './components/Nav';
import Jogo from './components/Jogo';
import Acessibilidade from './components/Acessibilidade';

function App() {
  

  return (
    <>
    <Router>
    <Nav></Nav>  
    <div className='app'>
    
    <div className='container-app'>
    
      
        <Routes>
          <Route path='/' element={<Inicial></Inicial>}></Route>
          <Route path='/jogo' element={<Jogo></Jogo>}></Route>
        </Routes>
        <div className='acessibilidade-container'>
        <Acessibilidade></Acessibilidade>
      </div>
      </div>
    </div>
    </Router>
    </>
  )
}

export default App
