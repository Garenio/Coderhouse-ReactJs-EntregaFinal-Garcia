import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyColjVChVXBrXsQNL4tYScfG6477FwPmTY",
  authDomain: "delta-tech-8747a.firebaseapp.com",
  projectId: "delta-tech-8747a",
  storageBucket: "delta-tech-8747a.appspot.com",
  messagingSenderId: "1016103502040",
  appId: "1:1016103502040:web:073d6335bc8cd198ff57ad"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)