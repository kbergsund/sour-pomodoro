import React from 'react'
import '../scss/Header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link className='header-link'
      to="/">
      <h1>sour pomodoro</h1>
      </Link>
    </header>
  )
}

export default Header