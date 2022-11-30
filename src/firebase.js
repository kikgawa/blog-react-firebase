// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3C6ds4QBqmwuzBZxA7ZNhDbaQo6UtliY",
  authDomain: "blog-dbd2e.firebaseapp.com",
  projectId: "blog-dbd2e",
  storageBucket: "blog-dbd2e.appspot.com",
  messagingSenderId: "948233280350",
  appId: "1:948233280350:web:0ae72c6b19685e8aaf0dcf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
