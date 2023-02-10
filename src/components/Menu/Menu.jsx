import React from 'react'
import { Link } from "react-router-dom";

const Menu = () => {


  
  return (
    <div className='menu'>
      <div className='menu-items'>
      <Link to="/">Inicio</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/biografia">Biografia</Link>
      <Link to="/contacto">Contacto</Link>
        
      </div>
      </div>
  )
}

export default Menu
