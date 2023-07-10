// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import firebase from 'firebase./app';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3AQQhJO0Z5HZjWSwtbT9q5FNwlNC3Rq8",
  authDomain: "expense-tracker-624cd.firebaseapp.com",
  projectId: "expense-tracker-624cd",
  storageBucket: "expense-tracker-624cd.appspot.com",
  messagingSenderId: "203060174312",
  appId: "1:203060174312:web:5ccb85c12fa49a442b985d",
  measurementId: "G-55M878SQX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);