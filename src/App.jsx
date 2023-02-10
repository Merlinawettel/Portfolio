import { useState } from 'react'
import Modal from './components/Modal/Modal'
import Header from  './components/Header/Header'
import Menu from './components/Menu/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './components/Contacto'
import Biografia from './components/Biografia/Biografia'
import Portfolio from './components/Portfolio/Portfolio'
import Inicio from './components/Inicio/Inicio'

function App() {

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path='/' element={<Inicio/>}/> 
   <Route path='/biografia' element={<Biografia/>}/> 
   <Route path='/portfolio' element={<Portfolio/>}/> 
    <Route path='/contacto' element={<Contacto/>}/> 
   </Routes>
   </BrowserRouter>
   
  )
  
}

export default App
