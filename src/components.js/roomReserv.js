import React from "react";
import main from "../images/mainRoom.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./roomReserv.css";

function RoomReserv() {
  const [ratings, setRatings] = useState(0);
  const [rooms, setRooms] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getRoomDetails();
  }, []);

  const handleStarClick = (rating) => {
    setRatings(rating);
  };

  const getRoomDetails = async () => {
    try {
      const querySnapShot = await getDocs(collection(db, "Rooms"));
      const data = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRooms(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const book = (roomData) => {
    navigate("/reserve", { state: { bookedRoom: roomData } });
  };

  return (
    <div>
      <div className="room-img-container">
        <img className="room-img" alt="room" src={main} />
      </div>

      <div className="nav">
        <div className="list">
          <ul>
            <li>
              <Link style={{ color: "white" }} to="/header">
                Facilities
              </Link>
            </li>
            <li>Rooms</li>
          </ul>
        </div>
      </div>

      <div className="left-text">
        <div className="text-name">
          <span style={{ fontWeight: "bold", fontSize: "35px" }}>
            WELCOME TO
          </span>
          <br />
          <span style={{ fontWeight: "bolder", fontSize: "80px" }}>LUXURY</span>
          <br />
          <span style={{ fontWeight: "bold", fontSize: "30px" }}>HOTELS</span>
          <br />
          <span style={{ fontWeight: "lighter", fontSize: "25px" }}>
            Book your stay and enjoy Luxury
            <br />
            redefined at the most affordable rates
          </span>
        </div>
      </div>

      <div className="facilities">
        <h1>ROOMS AND RATES</h1>
        <p>
          Each of our bright, light-flooded rooms comes with everything you
          could possibly need for a comfortable stay. And yes,
          <br />
          comfort isn't our only objective; we also value good design, sleek
          contemporary furnishing complemented
          <br />
          by the rich tones of nature's palette as visible from our room's
          sea-view windows and terraces
        </p>
      </div>

      <div className="room-list">
        {rooms.map((data) => (
          <div key={data.id} className="booking-box">
            <div className="book-room">
              <img
                className="booking-pic"
                alt="book"
                src="https://firebasestorage.googleapis.com/v0/b/hotel-app-3b9df.appspot.com/o/roomImage%2FRoom.jpg?alt=media&token=28e7e5ca-89b0-4d7c-bf12-8155c29e78fe"
              />
            </div>
            <div className="room-details">
              <h4 className="book-head">{data.RoomName}</h4>
              <div className="book-details">
                <h3>{data.RoomDescription}</h3>
              </div>
              <div className="price">
                <div className="room-price">
                  <h3>R{data.RoomPrice}</h3>
                </div>
                <div className="room-booking-time">
                  <h5>/night</h5>
                </div>
              </div>
              <div className="numberReviews">
                <div className="rate">
                  <h4>4.0</h4>
                </div>
                <div className="numberOfReviews">
                  <h6>(7 Reviews)</h6>
                </div>
              </div>
              <div className="favorite">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.010L8 2.748zM8 15C-7.333 4.868 3.279-3.040 7.824 1.143c.060.055.119.112.176.171a3.120 3.120 0.0 1 1 .176-.170C12.720-3.042 23.333 4.867 8.000 15z" />
                </svg>
              </div>
              <div className="btns">
                <button onClick={() => book(data)} className="btn-book">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/reserve"
                  >
                    Book
                  </Link>
                </button>
              </div>
              <div className="ratings">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={star <= ratings ? "currentColor" : "grey"}
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                    onClick={() => handleStarClick(star)}
                    style={{ cursor: "pointer" }}
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.830-4.73 3.522-3.356c.33-.314.16-.888-.282-.950l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.950l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomReserv;
