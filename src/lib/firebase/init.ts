// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEvCE0CUPTH9Q_BDQKEnXRnKZUH10sFdk",
  authDomain: "next-app-router-fcc41.firebaseapp.com",
  projectId: "next-app-router-fcc41",
  storageBucket: "next-app-router-fcc41.firebasestorage.app",
  messagingSenderId: "1041587619142",
  appId: "1:1041587619142:web:4c9674a6afe8bcd0e7d147",
  measurementId: "G-2P91VMMMER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;