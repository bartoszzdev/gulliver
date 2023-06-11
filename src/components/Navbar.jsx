import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='The Cocktail DB' />
        </Link>

        <ul className='nav-links'>
          <li>
            <Link to='/'>
              Destinos
            </Link>
          </li>
          <li>
            <Link to='/about'>
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
