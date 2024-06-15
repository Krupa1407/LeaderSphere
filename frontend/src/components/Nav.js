import React from 'react'
import { Link } from 'react-router-dom'       //because anker tag refresh the page

const Nav = () => {
  return (
    <div>
      <ul className='nav-ul'>
        <li><Link to="/">Leaders</Link></li>
        <li><Link to="/add">Add Leader</Link></li>
        <li><Link to="/update">Update Leader</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  )
}

export default Nav
