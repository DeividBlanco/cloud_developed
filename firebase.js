// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { initializeApp }
from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'
import { getAuth, signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8VgYL1CUlwzQEVuss9rn-L6mgPFAQ2JQ",
  authDomain: "cloud-develop-e736e.firebaseapp.com",
  projectId: "cloud-develop-e736e",
  storageBucket: "cloud-develop-e736e.appspot.com",
  messagingSenderId: "720163717793",
  appId: "1:720163717793:web:3df1286a67833c11bb66e0",
  measurementId: "G-NSJ8SXBK6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//module authentication
const auth = getAuth();
///////////metodo de auteticacion del usuario
export const loginvalidation=(email,password)=>
signInWithEmailAndPassword(auth, email, password)