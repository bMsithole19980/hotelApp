import React from 'react'
import room from '../images/Room.jpg'
import main from '../images/mainRoom.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { addDoc, collection,  getDocs } from 'firebase/firestore';
import { useEffect } from 'react';


function RoomReserv() {

    const [rating , setRating]= useState(0);
    const [RoomName , setRoomName] =useState('');
    const [RoomImage, setRoomImage] =useState('');
    const [RoomPrice ,setRoomPrice] =useState('');
    const [RoomDescription , setRoomDescription] =useState('');
    const [rooms , setRooms] = useState([]);

    const navigate =useNavigate();

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
            alert('Successully booked a room');
            navigate('/reserve');


        }catch(error){
            console.log(error.message);

        }
     }

    return (
        <div>
            <table style={{ width: "100%" }}>
                <tbody>
                <tr>
                    <td>
                        <img className='room-img' alt='room ' src={main}></img>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='nav'>
                            <div className='list'>
                                <ul>
                                    <li><Link style={{ color: "white" }} to='/header'> Facilities</Link></li>
                                    <li> Rooms</li>
                                </ul>

                            </div>

                        </div>

                    </td>
                </tr>
                <tr>
                    <td>
                        
                        <div className='left-text'>
                            <div className='text-name'>
                                <span style={{ fontWeight: "bold", fontSize: "35px" }}>WELCOME TO</span><br></br>
                                <span style={{ fontWeight: "bolder", fontSize: "80px" }}>LUXURY</span><br></br>
                                <span style={{ fontWeight: "bold", fontSize: "30px" }}>HOTELS</span><br></br>
                                <span style={{ fontWeight: "lighter", fontSize: "25px" }}>Book your stay and enjoy Luxury<br></br>redifined at the most affordable rates</span>
                            </div>

                        </div>

                    </td>
                </tr>
                <tr>
                    <td>
                        <div className=' facilities'>
                            <h1>ROOMS AND RATES</h1>
                            <p>Each of our bright, light-flooded rooms come with everything you could possiblt need for a comfortable stay. And yes,<br></br>comfort isn't our only objective, we also value good design, sleek contemporary furnishing complemented<br></br>by the rich tones of nature's palette as visible from our room's sea-view windows and terraces</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='booking-space'></div>
                    </td>
                </tr>
                {rooms.map((data)=>(
                    <tr key={data.id}>                  
                    <td >
                         
                         <div className='booking-box' >
 
                             <h4 className='book-head' >{data.RoomName}</h4>
                             <div className='book-details'>
                                 <h3>{data.RoomDescription}</h3>
                             </div>
                             <div className='room-price'>
                                <h3>R{data.RoomPrice}</h3>
                             </div>
                             <div className='room-booking-time'>
                                <h5>/night</h5>
                             </div>
                                <div className='fovourite'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                </div>
                             <div className='btns'>
                                 <button className=' btn-book'><Link style={{ color: "white", textDecoration: "none" }} to='/reserve'>Book</Link></button>
 
                             </div>
                             <div className='ratings'>
                                 <div className='rating-stars'></div>
 
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16"  height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                 </svg>
 
 
                             </div>

                             <div className='book-room' >
                                 <img className='booking-pic' alt='book' src='https://firebasestorage.googleapis.com/v0/b/hotel-app-3b9df.appspot.com/o/roomImage%2FRoom.jpg?alt=media&token=28e7e5ca-89b0-4d7c-bf12-8155c29e78fe'></img>
 
                             </div>
                         </div>
 
                     </td>
                     
                 </tr>
                  
                ))}
                <div className='booking-space'></div>
               
               
                </tbody>
                
            </table>
        </div>
    )
}

export default RoomReserv;
