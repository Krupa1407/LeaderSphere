import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';  


const Updateleader = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [desc, setDesc] = useState('');
    const [age, setAge] = useState('');
    const [books, setBooks] = useState([]);
    const [awards, setAwards] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      getLeaderDetails();
    },[]);
    // here in the above line [] due to this warning is coming.

    const getLeaderDetails = async() => {
      console.log(params);
      let result = await fetch(`http://localhost:5000/leader/${params.id}`);
      result = await result.json();
      // console.log(result);
      setName(result.name);
      setCategory(result.category);
      setDesc(result.desc);
      setAge(result.age);
    }

    const updateLeader = async (req, res) => {
        console.log(name, category, desc, age, books, awards);
        let result = await fetch(`http://localhost:5000/leader/${params.id}`,{
          method: "Put",
          body: JSON.stringify({name, category, desc, age}),
          headers: {
            "Content-Type" : "application/json"
          }
        });
        result = await result.json();
        navigate("/");
        console.log(result);
    }

  return (
    <div className='register'>
    <h1>Update Leader</h1>
    <input className="inputBox" type="text" placeholder='enter name' value={name}  onChange={(e) => setName(e.target.value)}/>
    <input className="inputBox"  type="text" placeholder='enter category' value={category} onChange={(e) => setCategory(e.target.value)}/>
    <input className="inputBox"  type="text" placeholder='enter desc' value={desc} onChange={(e) => setDesc(e.target.value)}/>
    <input className="inputBox"  type="text" placeholder='enter age' value={age} onChange={(e) => setAge(e.target.value)}/>
    {/* <ul className= "card-text">
        <li style={{ listStyle: 'none', fontWeight: 'bold' }}>Books:</li>
        {item.books.map((book, index) => (
          <input type="text" value={book} key={index}/>
        ))}
    </ul>
    <ul className= "card-text">
        <li style={{ listStyle: 'none', fontWeight: 'bold' }}>Awards:</li>
        {item.awards.map((award, index) => (
            <li style={{ listStyle: 'none' }} key={index}>{award}</li>
        ))}
    </ul> */}
    <button onClick={updateLeader} className="inputBox regbtn" type="button">Update Leader</button>
     </div>
  )
}

export default Updateleader