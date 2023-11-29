import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebase';
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from 'firebase/firestore';
import './RoomContent.css'; // Import the stylesheet

function RoomContent() {
  const [roomData, setRoomData] = useState([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);
  const [editedRoomImage, setEditedRoomImage] = useState('');
  const [editedRoomDescription, setEditedRoomDescription] = useState('');
  const [editedRoomPrice, setEditedRoomPrice] = useState('');

  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomImage, setNewRoomImage] = useState('');
  const [newRoomDescription, setNewRoomDescription] = useState('');
  const [newRoomPrice, setNewRoomPrice] = useState('');

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const roomsCollection = await getDocs(collection(db, 'Rooms'));
        const roomsData = roomsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setRoomData(roomsData);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRoomData();
  }, []);

  const handleEditRoom = (roomId) => {
    // Find the room to edit from the roomData array
    const roomToEdit = roomData.find((room) => room.id === roomId);
    setEditingRoom(roomToEdit);
    setEditedRoomImage(roomToEdit.RoomImage);
    setEditedRoomDescription(roomToEdit.RoomDescription);
    setEditedRoomPrice(roomToEdit.RoomPrice);
    setIsEditModalVisible(true);
  };

  const handleUpdateRoom = async () => {
    try {
      // Update the room in Firestore
      const roomRef = doc(db, 'Rooms', editingRoom.id);
      await updateDoc(roomRef, {
        RoomImage: editedRoomImage,
        RoomDescription: editedRoomDescription,
        RoomPrice: editedRoomPrice,
        // Add other fields as needed
      });
      console.log(`Room with ID ${editingRoom.id} updated successfully`);

      // Refresh the room data after update
      const roomsCollection = await getDocs(collection(db, 'Rooms'));
      const roomsData = roomsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRoomData(roomsData);

      // Close the edit modal
      setIsEditModalVisible(false);
      setEditingRoom(null);
    } catch (error) {
      console.error('Error updating room:', error);
    }
  };

  const handleDeleteRoom = async (roomId) => {
    try {
      // Delete the room from Firestore
      await deleteDoc(doc(db, 'Rooms', roomId));
      console.log(`Room with ID ${roomId} deleted successfully`);

      // Refresh the room data after deletion
      const roomsCollection = await getDocs(collection(db, 'Rooms'));
      const roomsData = roomsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRoomData(roomsData);
    } catch (error) {
      console.error('Error deleting room:', error);
    }
  };

  const handleAddRoom = async () => {
    try {
      // Add a new room to Firestore
      await addDoc(collection(db, 'Rooms'), {
        name: newRoomName,
        RoomImage: newRoomImage,
        RoomDescription: newRoomDescription,
        RoomPrice: newRoomPrice,
        // Add other fields as needed
      });
      console.log(`New room added successfully`);

      // Refresh the room data after addition
      const roomsCollection = await getDocs(collection(db, 'Rooms'));
      const roomsData = roomsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRoomData(roomsData);

      // Clear the input fields
      setNewRoomName('');
      setNewRoomImage('');
      setNewRoomDescription('');
      setNewRoomPrice('');
    } catch (error) {
      console.error('Error adding room:', error);
    }
  };

  return (
    <div>
      <p>Room Content</p>
      <div className='search'>
        <input
          type="text"
          id="search"
          placeholder="Enter room name or ID"
        />
        <button className='button-add' onClick={handleAddRoom}>Add</button>
      </div>
      <div className="room-container">
        {roomData.map((room) => (
          <div key={room.id} className="room-box">
            <img src={room.RoomImage} alt={room.name} className="room-image" />
            <div className="room-details">
              <div className="room-name">{room.name}</div>
              <div className="room-description">{room.RoomDescription}</div>
              <div className="room-price">{`Price: ${room.RoomPrice}`}</div>
              <div className="ActionButton">
                <button onClick={() => handleEditRoom(room.id)}>Edit</button>
                <button onClick={() => handleDeleteRoom(room.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isEditModalVisible && editingRoom && (
        <div className="edit-modal">
          <h2>Edit Room</h2>
          <label>Room Image</label>
          <input
            type="text"
            value={editedRoomImage}
            onChange={(e) => setEditedRoomImage(e.target.value)}
          />
          <label>Room Description</label>
          <input
            type="text"
            value={editedRoomDescription}
            onChange={(e) => setEditedRoomDescription(e.target.value)}
          />
          <label>Room Price</label>
          <input
            type="text"
            value={editedRoomPrice}
            onChange={(e) => setEditedRoomPrice(e.target.value)}
          />
          <button onClick={handleUpdateRoom}>Update Room</button>
          <button onClick={() => setIsEditModalVisible(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default RoomContent;
