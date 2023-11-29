import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

const RoomBookingContent = () => {
  const [reservationData, setReservationData] = useState([]);
  const [editableReservationId, setEditableReservationId] = useState(null);
  const [editedStatus, setEditedStatus] = useState('');

  useEffect(() => {
    const fetchReservationData = async () => {
      try {
        const reservationsCollection = await getDocs(collection(db, 'Reservation'));
        const reservationsData = reservationsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setReservationData(reservationsData);
      } catch (error) {
        console.error('Error fetching reservation data:', error);
      }
    };

    fetchReservationData();
  }, []);

  const handleEditStatus = (reservationId, currentStatus) => {
    setEditableReservationId(reservationId);
    setEditedStatus(currentStatus);
  };

  const handleSaveStatus = async (reservationId) => {
    try {
      // Update the status in Firestore
      const reservationDocRef = doc(db, 'Reservation', reservationId);
      await updateDoc(reservationDocRef, { status: editedStatus });

      // Reset editable state
      setEditableReservationId(null);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div>
      {/* Add the content for Room Booking here */}
      <p>Room Booking Content</p>
      <div className='search'>
        <input type="text" id="search" placeholder="Enter room name or ID" />
        <button className='button-add'>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Room Price</th>
            <th>Room Description</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the fetched reservation data */}
          {reservationData.map((reservation) => (
            <tr key={reservation.id}>
              {/* Map the reservation data here */}
              <td>{reservation.id}</td>
              <td>{reservation.firstName} {reservation.lastName}</td>
              <td>{reservation.roomPrice}</td>
              <td>{reservation.roomName}</td>
              <td>{reservation.arrivalDate}</td>
              <td>{reservation.departureDate}</td>
              <td>
                {editableReservationId === reservation.id ? (
                  // Display an input field for editing the status
                  <input
                    type="text"
                    value={editedStatus}
                    onChange={(e) => setEditedStatus(e.target.value)}
                  />
                ) : (
                  // Display the status
                  reservation.status
                )}
              </td>
              <td>
                {/* Add action buttons for each reservation */}
                <div className='ActionButton'>
                  {editableReservationId === reservation.id ? (
                    // Display save and cancel buttons when editing
                    <>
                      <button onClick={() => handleSaveStatus(reservation.id)}>Save</button>
                      <button onClick={() => setEditableReservationId(null)}>Cancel</button>
                    </>
                  ) : (
                    // Display edit button when not editing
                    <button onClick={() => handleEditStatus(reservation.id, reservation.status)}>Edit</button>
                  )}
                  <button>Delete</button>
                  <button>Confirm</button> {/* New button for Confirm */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomBookingContent;
