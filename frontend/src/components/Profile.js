import React from 'react'
import { useState, useEffect  } from 'react'


const Profile = () => {

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setName(user.name);
          setEmail(user.email);
        }
      }, []);

  return (
    <div>
    <div className='register'>
      <h1 style={{marginLeft: '18%'}}>Profile</h1>
      <input className="inputBox"  type="text" placeholder='enter password' value={name}/>
      <input className="inputBox"  type="text" placeholder='enter email' value={email}/>
    </div>
    </div>
  )
}

export default Profile
