import React, { useState } from 'react';
import './AdminScreen.css';
import DashboardContent from './adminScreens/DashboardContent';
import CustomersContent from './adminScreens/CustomerContent';
import RoomBookingContent from './adminScreens/RoomBookingContent';
import PaymentContent from './adminScreens/PaymentContent';
import RoomContent from './adminScreens/RoomContent';
import { useNavigate } from 'react-router-dom';

function AdminScreen() {
  const [selectedSection, setSelectedSection] = useState('Dashboard');
  const navigate = useNavigate();
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };
  const handleLogout=()=>{
    navigate('/');
  }

  return (
    <div className='admin'>
      <div className='navigation'>
        <h2>AppleDew Hotel</h2>
        <button className='button' onClick={handleLogout}>Logout</button>
      </div>

      <div className='content'>
        <div className='left-section'>
          <h2 onClick={() => handleSectionClick('Dashboard')}>Dashboard</h2>
          <h2 onClick={() => handleSectionClick('Customers')}>Customers</h2>
          <h2 onClick={() => handleSectionClick('RoomBooking')}>Room Booking</h2>
          <h2 onClick={() => handleSectionClick('Room')}>Room</h2>
          <h2 onClick={() => handleSectionClick('Payment')}>Payment</h2>
        </div>
        <div className='right-section'>
          {selectedSection === 'Dashboard' && <DashboardContent />}
          {selectedSection === 'Customers' && <CustomersContent />}
          {selectedSection === 'RoomBooking' && <RoomBookingContent />}
          {selectedSection === 'Payment' && <PaymentContent />}
          {selectedSection === 'Room' && <RoomContent />}
          {/* Add other conditions for additional sections */}
        </div>
      </div>
    </div>
  );
}

export default AdminScreen;
