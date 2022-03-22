import './styles/header.css'
import { useState } from 'react';
import  IconName, { BiMenuAltLeft }  from 'react-icons/bi'

const Header = () =>{

  const [nav, navChange] = useState(false)

  const changeNav = () =>{
    if( nav == false){
      navChange(true)
    }else{
      navChange(false)
    }
  }

  return(
    <>
      <header className="header">
        <div className="logo">
          <h1><span>To</span>Do</h1>
        </div>

        <div className="nav-icon" onClick={changeNav}><BiMenuAltLeft className='icon' /></div>

        <nav className={nav ? "active" : "none" }>
          <ul>
            <li><a onClick={() => scrollTo(0,0)} href="#">Home</a></li>
            <li><a onClick={() => scrollTo(0,600)} href="#">Usability</a></li>
            <li><a onClick={() => scrollTo(0,1100)}href="#">Priority</a></li>
            <li><a onClick={() => scrollTo(0,1600)} href="#">Test</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;