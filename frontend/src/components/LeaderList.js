import React, { useEffect, useState } from 'react'
// import logo from '../images/logo.jpg';
// import logo2 from '../images/dp6.jpg';



const LeaderList = () => {

    const[leaders, setLeaders] = useState([]);

    useEffect(() => {
        getLeaders();
    },[]);

    const getLeaders = async() => {
        let result = await fetch('http://localhost:5000/leaders');
        result = await result.json();
        // console.log('Products fetched:', result);
        setLeaders(result);
    }
    const deleteLeader = async(id) => {
        // console.log(id);
        let result = await fetch(`http://localhost:5000/delete-leader/${id}`,{
            method: "Delete"
        });
        result = await result.text();
        console.log("deleted leader id: ", result);
        if(result){
            getLeaders();
            // alert("record is deleted successfully.");
        }
    };


  return (
    <div>
            <h1 className='heading-leader'>Leaders</h1>
            <div className= "container">
                {
                    leaders.map((item, index) => 
                        <div className= "card" key={item._id}>
                        {/* <img src={logo} alt="Card Image" className= "card-img"/> */}
                        <div className= "card-body">
                        <h5 className= "card-title">{item.name}</h5>
                        <p className= "card-text">{item.category}</p>
                        <p className= "card-text">{item.desc}</p>
                        <p className= "card-text">{item.age}</p>
                        <ul className= "card-text">
                            <li style={{ listStyle: 'none', fontWeight: 'bold' }}>Books:</li>
                            {item.books.map((book, index) => (
                                <li style={{ listStyle: 'none' }} key={index}>{book}</li>
                            ))}
                        </ul>
                        <ul className= "card-text">
                            <li style={{ listStyle: 'none', fontWeight: 'bold' }}>Awards:</li>
                            {item.awards.map((award, index) => (
                                <li style={{ listStyle: 'none' }} key={index}>{award}</li>
                            ))}
                        </ul>
                        <button className= "card-button" onClick={() => deleteLeader(item._id)}>Delete</button>
                        {/* <Link href="#" className= "card-button">Edit</Link> */}
                        </div>
                    </div>
                    )
                }
        </div>
    </div>
  )
}

export default LeaderList