// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbRXt_dE7msY3fQ5tBS828MfgHK-N1YIg",
  authDomain: "chatbox-adbb4.firebaseapp.com",
  projectId: "chatbox-adbb4",
  storageBucket: "chatbox-adbb4.appspot.com",
  messagingSenderId: "609787612208",
  appId: "1:609787612208:web:bfaef2a13570e1170971f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);