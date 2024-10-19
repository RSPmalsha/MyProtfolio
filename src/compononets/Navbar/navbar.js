import React from 'react';
import './navbar.css';
import logo from '../../assest/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo' />
      <div className='desktopMenu'>
        <Link to='intro' className='desktopMenuItems' smooth={true} duration={500}>
          Home
        </Link>
        <Link to='about' className='desktopMenuItems' smooth={true} duration={500}>
          About
        </Link>
        <Link to='work' className='desktopMenuItems' smooth={true} duration={500}>
          Work
        </Link>
      </div>
      <Link to='contact' className='desktopMenuBtn' smooth={true} duration={500}>
        <button>
          Contact Me
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
