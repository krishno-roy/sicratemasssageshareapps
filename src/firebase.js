// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVlPA52Hh_Ga9RFUpbA8ph0GUiVdzXDwc",
  authDomain: "sicratemassageshareapps.firebaseapp.com",
  projectId: "sicratemassageshareapps",
  storageBucket: "sicratemassageshareapps.firebasestorage.app",
  messagingSenderId: "696586066439",
  appId: "1:696586066439:web:8435f3c291d1548a89e8a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);