import React, { useState, useEffect } from 'react';
import { db,auth} from '../../config/firebase';

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

function CustomerContent() {
  const [userData, setUserData] = useState([]);
  const [reservationData, setReservationData] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchUserData = async () => {
    try {
      const usersCollection = await getDocs(collection(db, 'Users'));
      const usersData = usersCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserData(usersData);
      setTotalCustomers(usersData.length); // Update total customer count
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchReservationData = async () => {
    try {
      const reservationsCollection = await getDocs(collection(db, 'Reservation'));
      const reservationsData = reservationsCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReservationData(reservationsData);
    } catch (error) {
      console.error('Error fetching reservation data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchReservationData();
  }, []);

  const handleDelete = async (id, type) => {
    try {
      if (type === 'user') {
        await deleteDoc(doc(db, 'Users', id));
        fetchUserData();
      } else if (type === 'reservation') {
        await deleteDoc(doc(db, 'Reservation', id));
        fetchReservationData();
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleOpenModal = (id) => {
    setIsModalOpen(true);
    setSelectedItemId(id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItemId(null);
    setNewStatus('');
  };

  const handleEditStatus = async () => {
    try {
      const id = selectedItemId;
      const type = id.includes('user') ? 'user' : 'reservation';

      if (type === 'user') {
        await updateDoc(doc(db, 'Users', id), { status: newStatus });
        fetchUserData();
      } else if (type === 'reservation') {
        await updateDoc(doc(db, 'Reservation', id), { status: newStatus });
        fetchReservationData();
      }

      handleCloseModal();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterData = (data) => {
    return data.filter(
      (item) =>
        item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div>
      {/* Add the content for Customers here */}
      <p>Total Customers: {totalCustomers}</p>
      <div className='search'>
        <input
          type="text"
          id="search"
          placeholder="Search by userId, firstName, or lastName"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className='button-add'>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Zip Code</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the fetched user data */}
          {filterData(userData).map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.address}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.zipCode}</td>
              <td>{user.status}</td>
              <td>
                <div className='ActionButton'>
                  <button onClick={() => handleDelete(user.id, 'user')}>
                    Delete
                  </button>
                  <button onClick={() => handleOpenModal(user.id)}>
                    Edit Status
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {/* Map over the fetched reservation data */}
          {filterData(reservationData).map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.firstName}</td>
              <td>{reservation.lastName}</td>
              <td>{reservation.addressLine2}</td>
              <td>{reservation.phoneNumber}</td>
              <td>{reservation.zipCode}</td>
              <td>{reservation.status}</td>
              <td>
                {/* Add action buttons for each reservation */}
                <div className='ActionButton'>
                  <button onClick={() => handleDelete(reservation.id, 'reservation')}>
                    Delete
                  </button>
                  <button onClick={() => handleOpenModal(reservation.id)}>
                    Edit Status
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Edit Status</h2>
            <label htmlFor="newStatus">New Status:</label>
            <input
              type="text"
              id="newStatus"
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
            />
            <button onClick={handleEditStatus}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerContent;
