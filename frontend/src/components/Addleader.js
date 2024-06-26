import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';  



const Addleader = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [desc, setDesc] = useState('');
    const [age, setAge] = useState('');
    const [bookInput, setBookInput] = useState('');
    const [awardInput, setAwardInput] = useState('');
    const [books, setBooks] = useState([]);
    const [awards, setAwards] = useState([]);
    const [error, setError] = useState(false);
    const [error2, setError2] = useState('');
    const navigate = useNavigate();


    const addBook = () => {
        if (bookInput.trim() !== '' && books.length < 3) {
            setBooks([...books, bookInput]);
            setBookInput('');
            setError2('');
        } else if (books.length >= 3) {
            setError2('You can only add up to 3 books.');
        }
    };

    const addAward = () => {
        if (awardInput.trim() !== '' && awards.length < 3) {
            setAwards([...awards, awardInput]);
            setAwardInput('');
            setError2('');
        } else if (awards.length >= 3) {
            setError2('You can only add up to 3 awards.');
        }
    };


    const addLeader = async (req, res) => {
        
        if(!name || !category || !desc || !age){
            setError(true);
            return false;
        }

        console.log(name, category, desc, age, books, awards);
        // fetch the userid
        const user = JSON.parse(localStorage.getItem("user"));
        let userId = user._id;
        console.log(userId);


        // api
        let result = await fetch('http://localhost:5000/add-leader', {
            method: "post",
            body: JSON.stringify({name, category, desc, age, books, awards, userId}),
            headers:{
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        navigate("/");
        console.log(result);


    }

  return (
    <div className='register container-add-leader'>
    <h1>Add Leader</h1>
    <input className="inputBox" type="text" placeholder='enter name' value={name}  onChange={(e) => setName(e.target.value)}/>
    {error && !name && <span className='invalid-inp'>enter valid name</span>}
    <input className="inputBox"  type="text" placeholder='enter category' value={category} onChange={(e) => setCategory(e.target.value)}/>
    {error && !category && <span className='invalid-inp'>enter valid category</span>}
    <input className="inputBox"  type="text" placeholder='enter desc' value={desc} onChange={(e) => setDesc(e.target.value)}/>
    {error && !desc && <span className='invalid-inp'>enter valid desc</span>}
    <input className="inputBox"  type="text" placeholder='enter age' value={age} onChange={(e) => setAge(e.target.value)}/>
    {error && !age && <span className='invalid-inp'>enter valid age</span>}
    
    <div>
        <input className="inputBox" type="text" placeholder='enter book' value={bookInput} onChange={(e) => setBookInput(e.target.value)} />
        <button type="button" className='addbtn regbtn' onClick={addBook}>Add Book</button>
        {error2 && books.length >= 3 && <span className='invalid-inp'>{error2}</span>}
    </div>
    <ul className='inputBox'>
        <li style={{ listStyle: 'none', fontWeight: 'bold' }}>Books:</li>
        {books.map((book, index) => (
            <li style={{ listStyle: 'none' }} key={index}>{book}</li>
        ))}
    </ul>

    <div>
        <input className="inputBox" type="text" placeholder='enter award' value={awardInput} onChange={(e) => setAwardInput(e.target.value)} />
        <button type="button" className='addbtn regbtn' onClick={addAward}>Add Award</button>
        {error2 && books.length >= 3 && <span className='invalid-inp'>{error2}</span>}
    </div> 
    <ul className='inputBox'>
        <li style={{ listStyle: 'none', fontWeight: 'bold' }}>Awards:</li>
        {awards.map((award, index) => (
            <li style={{ listStyle: 'none' }} key={index}>{award}</li>
        ))}
    </ul>
 
    

    <button onClick={addLeader} className="inputBox regbtn" type="button">Add Leader</button>

    </div>
  )
}

export default Addleader