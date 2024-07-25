import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='contents'>

        <p><span>G</span> Green Groves</p>

        <nav>
            <Link to='/' className='link'>Home</Link>
            <Link to='/gardening' className='link'>Gerdening</Link>
            <Link to='/educational' className='link'>Educational</Link>
            <Link to='/about' className='link'>About Us</Link>
        </nav>

        <Link>Contact Us</Link>
      </div>

    </div>
  )
}

export default Navbar