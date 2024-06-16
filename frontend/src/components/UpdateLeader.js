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
      setBooks(result.books);
      setAwards(result.awards);
      console.log(result.books);
    }

    const updateLeader = async (req, res) => {
        console.log(name, category, desc, age, books, awards);
        let result = await fetch(`http://localhost:5000/leader/${params.id}`,{
          method: "Put",
          body: JSON.stringify({name, category, desc, age, books,awards}),
          headers: {
            "Content-Type" : "application/json"
          }
        });
        result = await result.json();
        navigate("/");
        console.log(result);
    }

    const handleBookChange = (index, value) => {
      const newBooks = [...books];
      newBooks[index] = value;
      setBooks(newBooks);
    }

    const handleAwardChange = (index, value) => {
      const newAwards = [...awards];
      newAwards[index] = value;
      setAwards(newAwards);
    }


  return (
    <div className='register container-add-leader'>
    <h1>Update Leader</h1>
    <input className="inputBox" type="text" placeholder='enter name' value={name}  onChange={(e) => setName(e.target.value)}/>
    <input className="inputBox"  type="text" placeholder='enter category' value={category} onChange={(e) => setCategory(e.target.value)}/>
    <input className="inputBox"  type="text" placeholder='enter desc' value={desc} onChange={(e) => setDesc(e.target.value)}/>
    <input className="inputBox"  type="text" placeholder='enter age' value={age} onChange={(e) => setAge(e.target.value)}/>
    <ul className= "card-text">
        <p style={{ fontWeight: 'bold', paddingLeft: '2vh' }}>Books:</p>
        {books.map((book, index) => (
            <input
                className="inputBox"
                type="text"
                value={book}
                key={index}
                onChange={(e) => handleBookChange(index, e.target.value)}
            />
        ))}
    </ul>
    <ul className= "card-text">
        <p style={{ fontWeight: 'bold', paddingLeft: '2vh' }}>Awards:</p>
        {awards.map((award, index) => (
            <input
                className="inputBox"
                type="text"
                value={award}
                key={index}
                onChange={(e) => handleAwardChange(index, e.target.value)}
            />
        ))}
    </ul>
    <button onClick={updateLeader} className="inputBox regbtn" type="button">Update Leader</button>
     </div>
  )
}

export default Updateleader