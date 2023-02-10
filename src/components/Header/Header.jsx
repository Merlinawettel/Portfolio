import{ useState} from 'react'
import logo from '../../img/logo.png'
import Menu from '../Menu/Menu'
import Modal from '../Modal/Modal'


function Header() {

   
  return (
    <header>
        <img src={logo} className="logo" alt="logo"/>
      <Menu />
     
    </header>
  )
}

export default Header
