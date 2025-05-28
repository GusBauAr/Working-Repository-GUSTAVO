// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK33puAPLJKJo8lE2z6swXgUCl3GX6pe0",
  authDomain: "react-gusbauar.firebaseapp.com",
  projectId: "react-gusbauar",
  storageBucket: "react-gusbauar.firebasestorage.app",
  messagingSenderId: "721681950190",
  appId: "1:721681950190:web:fda70e8655f26718031aff"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const  FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore(FirebaseApp);