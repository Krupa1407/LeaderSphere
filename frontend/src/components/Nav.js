import React from 'react'
import { Link, useNavigate } from 'react-router-dom'       //because anker tag refresh the page
import logo from '../images/logo.jpg';

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
      <img src={logo} alt="logo" className='logo' />
      <li className='logo'><Link to="/">LeaderSphere</Link></li>
      {auth ? 
        <div className='nav-right'>
        <li><Link to="/">Leaders</Link></li>
        <li><Link to="/add">Add Leader</Link></li>
        <li><Link to="/update">Update Leader</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link onClick={logout} to="/signup">Logout [{JSON.parse(auth).name}]</Link></li> 
        </div>
        :
        <div className='nav-right'>
        <li><Link to="/signup">signup</Link></li>
        <li><Link to="/login">login</Link></li>
        </div>
      }
      </ul>
    </div>
  )
}

export default Nav
