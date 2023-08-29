import React from 'react'
import '../App.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    // create nav for show nav manu
    <nav>
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
      <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
      <NavLink to="/add-blog" className="nav-link">Add Blog</NavLink>
    </nav>
  )
}

export default Navbar
