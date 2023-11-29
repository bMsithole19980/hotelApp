import React from 'react';
import './DashboardContent.css'; // Import the CSS file
// Note: Ensure that the CSS file is in the same directory as your component or adjust the import path accordingly

const DashboardContent = () => (
  <div className="container">
    <div className="header">
      <h2 className="dashboardText">Dashboard Content</h2>
      <p className="totalBooking">Total bookings</p>
    </div>

    <div className="card">
      <h3 className="cardTitle">Recent Bookings</h3>
      {/* Add content related to recent bookings */}
    </div>

    <div className="card">
      <h3 className="cardTitle">Revenue</h3>
      {/* Add content related to revenue */}
    </div>

    {/* Add more cards or boxes as needed */}
  </div>
);

export default DashboardContent;
