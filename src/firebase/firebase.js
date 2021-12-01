import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBxNjIe8P6SaBsRNUjkWPbnXIDtmME-LGY",
  authDomain: "creditapp-ad211.firebaseapp.com",
  projectId: "creditapp-ad211",
  storageBucket: "creditapp-ad211.appspot.com",
  messagingSenderId: "509410521301",
  appId: "1:509410521301:web:9ea6c2c1c3be42c7d5f25c",
  measurementId: "G-XL3CLL0C7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}
