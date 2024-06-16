import React from 'react'
import { Link } from 'react-router-dom'       //because anker tag refresh the page

const Nav = () => {
  const auth = localStorage.getItem("user");

  return (
    <div>
      <ul className='nav-ul'>
        <li><Link to="/">Leaders</Link></li>
        <li><Link to="/add">Add Leader</Link></li>
        <li><Link to="/update">Update Leader</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        {auth ? 
        <li><Link to="/logout">Logout</Link></li> 
        :
        <li><Link to="/signup">signup</Link></li>}
      </ul>
    </div>
  )
}

export default Nav
