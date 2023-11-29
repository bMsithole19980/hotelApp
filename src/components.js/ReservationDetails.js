import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import "./ReservationDetails.css";
import { useLocation } from "react-router-dom";
import { db } from "../config/firebase";
import { useNavigate } from "react-router-dom";

function ReservationDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookedRoom, roomName, roomDescription, roomPrice } =
    location.state || {};

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    arrivalDate: "",
    arrivalTime: "",
    departureDate: "",
    departureTime: "",
    numberOfAdults: 1,
    numberOfKids: 0,
    roomName: roomName,
    roomDescription: roomDescription,
    roomPrice: roomPrice,
    status: 'Pending'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Include roomName in formData
      const dataToSave = {
        ...formData,
        roomName: roomName,
        roomDescription,
        roomPrice,
      };

      // Add the reservation details to the Firebase reservation collection
      const reservationRef = collection(db, "Reservation");
      await addDoc(reservationRef, dataToSave);

      // Show success message
      window.alert("Successfully reserved a room");

      // Navigate to the successReserved screen
      navigate("/successReserved");

      // Handle any additional logic after successful submission
      console.log("Form submitted:", dataToSave);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className="reserveDetail">
      <h1>{roomName} Form</h1>
      <p>Please complete the form below</p>
      <h4>Your reservation will be verified</h4>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <h2>Full Name</h2>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <h2>Address</h2>
        <div>
          <input
            type="text"
            placeholder="Street Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Street Address Line 2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="State / Province"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Postal / Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <h2>Phone Number</h2>
        <input
          type="tel"
          placeholder="(000) 000-0000"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <h2>Email</h2>
        <input
          type="email"
          placeholder="example@example.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <h2>Room Name</h2>
        <input
          type="text"
          name="roomName"
          value={roomName}
          readOnly
          placeholder={roomName}
        />

        <h2>Room Description</h2>
        <input
          type="text"
          name="roomDescription"
          value={roomDescription}
          readOnly
          placeholder={roomDescription}
        />

        <h2>Room Price</h2>
        <input
          type="text"
          name="roomPrice"
          value={roomPrice}
          readOnly
          placeholder={roomPrice}
        />

        {/* Arrival - Date and Time */}
        <h2>Arrival - Date and Time</h2>
        <div>
          <input
            type="date"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="arrivalTime"
            value={formData.arrivalTime}
            onChange={handleChange}
            required
          />
        </div>

        {/* Departure - Date and Time */}
        <h2>Departure - Date and Time</h2>
        <div>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="departureTime"
            value={formData.departureTime}
            onChange={handleChange}
            required
          />
        </div>

        {/* Number of Guests */}
        <h2>Number of Adults</h2>
        <input
          type="number"
          placeholder="ex: 23"
          name="numberOfAdults"
          value={formData.numberOfAdults}
          onChange={handleChange}
          min={1}
          required
        />

        <h2>Number of Kids (If there are any)</h2>
        <input
          type="number"
          placeholder="ex: 23"
          name="numberOfKids"
          value={formData.numberOfKids}
          onChange={handleChange}
          min={0}
        />

        <h2>Status</h2>
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
          placeholder="Pending"
        />

        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
}

export default ReservationDetails;
