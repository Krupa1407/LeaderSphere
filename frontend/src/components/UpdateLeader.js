import React from 'react'
import { useState } from 'react'


const Updateleader = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [desc, setDesc] = useState('');
    const [age, setAge] = useState('');
    const [books, setBooks] = useState('');
    const [awards, setAwards] = useState('');




    const updateLeader = async (req, res) => {
        console.log(name, category, desc, age, books, awards);
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