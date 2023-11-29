// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAs3d1kjVCz7nr9_XfrsbXHBScBNLCQUnM",
  authDomain: "hotel-app-3b9df.firebaseapp.com",
  projectId: "hotel-app-3b9df",
  storageBucket: "hotel-app-3b9df.appspot.com",
  messagingSenderId: "156125633314",
  appId: "1:156125633314:web:ae3d87240f1b138501637b",
  measurementId: "G-FV65DQ4WC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app)
export {auth ,db};
