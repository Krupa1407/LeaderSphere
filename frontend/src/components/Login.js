import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/");
        }
    });

    const handleLogin = async() => {
        console.log(email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: "post",
            body: JSON.stringify({email, password}),
            headers: {
                "Content-Type" : "application/json"
            }
        });
        result = await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");
        }
        else{
            alert("please enter correct details.")
        }
    }

  return (
    <div className='register'>
      <video className="video-background" autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <h1 style={{marginLeft: '18%'}}>Login</h1>
      <input className="inputBox"  type="text" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input className="inputBox"  type="password" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleLogin} className="inputBox regbtn" type="button">Login</button>
    </div>
  )
}

export default Login