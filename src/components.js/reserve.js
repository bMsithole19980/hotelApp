import React from 'react'
import room from '../images/Room.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';

function Reserve() {
    const [rating, setRating] = useState(0);
    const [RoomName, setRoomName] = useState('');
    const [RoomImage, setRoomImage] = useState('');
    const [RoomPrice, setRoomPrice] = useState('');
    const [RoomDescription, setRoomDescription] = useState('');
    const [rooms, setRooms] = useState([]);

    const navigate =useNavigate();

    useEffect(() => {
        getRoomDetails();

    },[]);

    const getRoomDetails = async () => {
        try {
            const querySnapShot = await getDocs(collection(db, "Rooms"));
            const data = querySnapShot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
                quantity:1

            }))
            setRooms(data);
            console.log(data);

        } catch (error) {
            console.log(error.message);
        }
    };



    const reserveRoom = async () => {
        try {
            const docRef = await addDoc(collection(db, "Reservation"), {
                RoomName: RoomName,
                RoomImage: RoomImage,
                RoomPrice: RoomPrice,
                RoomDescription: RoomDescription,
            });
            alert('Successully reserved a room');
            navigate('/successReserved')




        } catch (error) {
            console.log(error.message);

        }
    }

    

    const handDecrement=(index)=>{
        const updateRooms =[...rooms];
        if(updateRooms[index].quantity >1){
            updateRooms[index].quantity-=1;
            setRooms(updateRooms)
        }

    };
    const handIncrement=(index)=>{
        const updateRooms =[...rooms];
        updateRooms[index].quantity +=1
        setRooms(updateRooms);

    };


    return (
        <div>
            {rooms.map((data ,index)=>(
                 <div className='booking-box' key={data.id} >

                 <h4 className='book-head' >{data.RoomName}</h4>
                 <div className='book-details'>
                     <h3>wifi</h3>
                 </div>
                 <div className='btns'>
                     <button className=' btn-reserve' onClick={()=>reserveRoom(data)}><Link style={{ color: "white", textDecoration: "none" }} to='/reserve'>Reserve</Link></button>
     
                 </div>
                 <div className='features'>
                     <h4>Children</h4><br></br>
                     <h4>Adults</h4><br></br>
                     <h4>Nights</h4><br></br>
                 </div>
                 <div className='input-group'>
                     <input type='button' value="- " onClick={()=>handDecrement(index)} className='btn-minus'></input>
                     <input type='number' value={data.quantity }  className='number' step="1" max="10" name='quantity' readOnly ></input>
                     <input type='button' value="+ " onClick={()=>handIncrement(index)} className='btn-plus'></input>
                 </div>
                 <div className='input-group1'>
                     <input type='button' value="- " onClick={()=>handDecrement(index)}  className='btn-minus'></input>
                     <input type='number' value={data.quantity }  className='number' step="1" max="10" name='quantity' readOnly></input>
                     <input type='button' value="+ " onClick={()=>handIncrement(index)} className='btn-plus'></input>
                 </div>
                 <div className='input-group2'>
                     <input type='button' value="- " onClick={()=>handDecrement(index)} className='btn-minus'></input>
                     <input type='number' value={data.quantity }  className='number' step="1" max="10" name='quantity' readOnly></input>
                     <input type='button' value="+ " onClick={()=>handIncrement(index)} className='btn-plus'></input>
                 </div>
                    <div className='reserve-price'>
                        <h3>R{data.RoomPrice}</h3>
                    </div>
                    <div className='reserve-booking-time'>
                        <h5>total</h5>
                    </div>
     
                 <div className='book-room' >
                     <img className='booking-pic' alt='book' src={room}></img>
     
                 </div>
             </div>

            ))}

        





     </div>

    )
}

export default Reserve;