// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB032LC98RA7ovTF9MGCQEXQqrRU0LpyZM",
  authDomain: "car-doctor-8b9db.firebaseapp.com",
  projectId: "car-doctor-8b9db",
  storageBucket: "car-doctor-8b9db.appspot.com",
  messagingSenderId: "745095997003",
  appId: "1:745095997003:web:27fbdc4965e90dcffdcfce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
