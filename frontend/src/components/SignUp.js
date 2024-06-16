import React from 'react'
import { useState } from 'react'


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const collectData = () => {
        console.log(name, email, password);
    }
  return (
    <div className='register'>
      <h1>register</h1>
      <input className="inputBox" type="text" placeholder='enter name' value={name}  onChange={(e) => setName(e.target.value)}/>
      <input className="inputBox"  type="text" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input className="inputBox"  type="password" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={collectData} className="inputBox regbtn" type="button">Sign Up</button>
    </div>
  )
}

export default SignUp