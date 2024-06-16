import React from 'react'
import { Link, useNavigate } from 'react-router-dom'       //because anker tag refresh the page

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  }

  return (
    <div>
      <ul className='nav-ul'>
        <li><Link to="/">Leaders</Link></li>
        <li><Link to="/add">Add Leader</Link></li>
        <li><Link to="/update">Update Leader</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {auth ? 
        <li><Link onClick={logout} to="/signup">Logout</Link></li> 
        :
        <>
        <li><Link to="/signup">signup</Link></li>
        <li><Link to="/login">login</Link></li>
        </>
        }
      </ul>
    </div>
  )
}

export default Nav
