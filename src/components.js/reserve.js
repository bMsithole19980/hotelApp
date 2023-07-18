import React from 'react'
import room from '../images/Room.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Reserve() {
    const [rating, setRating] = useState(0);
    const [RoomName, setRoomName] = useState('');
    const [RoomImage, setRoomImage] = useState('');
    const [RoomPrice, setRoomPrice] = useState('');
    const [RoomDescription, setRoomDescription] = useState('');
    const [rooms, setRooms] = useState([]);
    const location = useLocation();
    const { bookedRoom } = location.state || {};

    const navigate = useNavigate();

    useEffect(() => {
        getRoomDetails();

    }, []);

    const getRoomDetails = async () => {
        try {
            const querySnapShot = await getDocs(collection(db, "Rooms"));
            const data = querySnapShot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
                quantity: doc.id === bookedRoom.id ? bookedRoom.quantity:1 // set initial quantity from bookedRo0m

            }))
            setRooms(data);
            console.log(data);

        } catch (error) {
            console.log(error.message);
        }
    };



    const reserveRoom = async (roomData) => {
        try {
            const docRef = await addDoc(collection(db, "Reservation"), {

                rooms: roomData
            });
            alert('Successully reserved a room');
            navigate('/successReserved')

        } catch (error) {
            console.log(error.message);

        }
    }



    const handDecrement = (index) => {
        const updateRooms = [...rooms];
        if (updateRooms[index].quantity > 1) {
            updateRooms[index].quantity -= 1;
            setRooms(updateRooms)
        }

    };
    const handIncrement = (index) => {
        const updateRooms = [...rooms];
        updateRooms[index].quantity += 1
        setRooms(updateRooms);

    };


    return (
        <div>
            {bookedRoom ? (
                <div className='booking-box' key={bookedRoom.id} >

                <h4 className='book-head' >{bookedRoom.RoomName}</h4>
                <div className='book-details'>
                    <h3>{bookedRoom.RoomDescription}</h3>
                </div>
                <div className='btns'>
                    <button className=' btn-reserve' onClick={()=>reserveRoom(bookedRoom)}><Link style={{ color: "white", textDecoration: "none" }} to='/reserve'>Reserve</Link></button>
    
                </div>
                <div className='features'>
                    <h4 className='children'>Children</h4><br></br>
                    <h4 className='adult'>Adults</h4><br></br>
                    <h4 className='nights'>Nights</h4><br></br>
                </div>
                <div className='input-group'>
                    <input type='button' value="- " onClick={()=>handDecrement(0)} className='btn-minus'></input>
                    <input type='number' value={bookedRoom.quantity }  className='number' step="1" max="10" name='quantity' readOnly ></input>
                    <input type='button' value="+ " onClick={()=>handIncrement(0)} className='btn-plus'></input>
                </div>
                <div className='input-group1'>
                    <input type='button' value="- " onClick={()=>handDecrement(0)}  className='btn-minus'></input>
                    <input type='number' value={bookedRoom.quantity }  className='number' step="1" max="10" name='quantity' readOnly></input>
                    <input type='button' value="+ " onClick={()=>handIncrement(0)} className='btn-plus'></input>
                </div>
                <div className='input-group2'>
                    <input type='button' value="- " onClick={()=>handDecrement(0)} className='btn-minus'></input>
                    <input type='number' value={bookedRoom.quantity }  className='number' step="1" max="10" name='quantity' readOnly></input>
                    <input type='button' value="+ " onClick={()=>handIncrement(0)} className='btn-plus'></input>
                </div>
                   <div className='reserve-price'>
                       <h3>R{bookedRoom.RoomPrice}</h3>
                   </div>
                   <div className='reserve-booking-time'>
                       <h5>total</h5>
                   </div>
    
                <div className='book-room' >
                    <img className='booking-pic' alt='book' src={room}></img>
    
                </div>
            </div>

                
            ):null}










        </div>

    );
}

export default Reserve;