import React from 'react'
import { FaGithub } from "react-icons/fa";
import { NavLink  } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg py-3'>
      <div className="container">
        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-3">
          <FaGithub size={32}/>
          <span className="fw-bold">Github Finder</span>
        </NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id='navbar'>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-uppercase">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-uppercase">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar