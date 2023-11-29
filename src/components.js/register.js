import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, setDoc } from 'firebase/firestore';
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userRole, setUserRole] = useState("user"); // Default to "user" role
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const register = async () => {
    try {
      // Step 1: Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Step 2: Store additional user data, including role, in Firestore
      await storeUserDataInFirestore(user.uid, email, userRole);

      console.log("User registered successfully");
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const storeUserDataInFirestore = async (userUid, email, userRole) => {
    try {
      // Store user data in Firestore
      const userRef = doc(db, 'Users', userUid);
      await setDoc(userRef, {
        email: email,
        role: userRole,
        uid: userUid,
      });
  
      console.log('User data stored:', { email, role: userRole });
    } catch (error) {
      console.error('Error storing user data in Firestore:', error);
    }
  };
  

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div className="register-container">
        <div className="form-group">
          <div className="form-content">
            <h2>
              Create an account to<br></br> Exclusive Luxury Hotels<br></br>{" "}
              community
            </h2>
            <input
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
            />
            <br />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
              />
              <br />
              <span className="password-toggle" onClick={handlePasswordToggle}>
                {showPassword ? (
                  <i className="fa fa-eye-slash" style={{ color: "black" }}></i>
                ) : (
                  <i className="fa fa-eye" style={{ color: "black" }}></i>
                )}
              </span>
            </div>
            <label>
              User Role:
              <select onChange={(event) => setUserRole(event.target.value)}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </label>
            <br />
            <button onClick={register}>Sign Up</button>
            <br />
            <h4>
              Already have an account?{" "}
              <Link to="/" style={{ color: "lightskyblue" }}>
                Log in
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
