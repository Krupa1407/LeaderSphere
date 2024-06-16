import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom';   //use for the navigation


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
      const auth = localStorage.getItem("user");
      if(auth){
        navigate('/');
      }
    })



    const collectData = async() => {
        console.log(name, email, password);
        let result = await fetch('http://localhost:5000/register',{
            method: 'post',
            body: JSON.stringify({name,email,password}),
            headers:{
              'Content-Type':'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/');
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