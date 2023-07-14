import React from 'react'
import room from '../images/Room.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { addDoc, collection,  getDocs } from 'firebase/firestore';
import { useEffect } from 'react';

function Reserve() {
    const [rating , setRating]= useState(0);
    const [RoomName , setRoomName] =useState('');
    const [RoomImage, setRoomImage] =useState('');
    const [RoomPrice ,setRoomPrice] =useState('');
    const [RoomDescription , setRoomDescription] =useState('');
    const [rooms , setRooms] = useState([]);

    useEffect(()=>{
        getRoomDetails();

    });

    const getRoomDetails=async()=>{
        try{
            const querySnapShot = await getDocs(collection(db,"Rooms"));
            const data =querySnapShot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data()
                
            }))
            setRooms(data);
            console.log(data);
    
            }catch(error){
                console.log(error.message);
            }
    };

 

     const bookRoom=async()=>{
        try{
            const docRef = await addDoc(collection(db,"Rooms"),{
                RoomName:RoomName,
                RoomImage:RoomImage,
                RoomPrice:RoomPrice,
                RoomDescription:RoomDescription,
            });
            alert('Successully reserved a room');
            


        }catch(error){
            console.log(error.message);

        }
     }




  return (
      <div>
       
        
          <div className='booking-box'>

              <h4 className='book-head' >The people's Brownstone</h4>
              <div className='book-details'>
                  <h3>Wifi</h3>
              </div>
              <div className='btns'>
                  <button className=' btn-reserve'><Link style={{ color: "white", textDecoration: "none" }} to='/reserve'>Reserve</Link></button>

              </div>
              <div className='features'>
                  <h4>Children</h4><br></br>
                  <h4>Adults</h4><br></br>
                  <h4>Nights</h4><br></br>
              </div>
              <div className='book-room' >
                  <img className='booking-pic' alt='book' src={room}></img>

              </div>
          </div>
      </div>
    
  )
}

export default Reserve;