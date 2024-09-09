// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5PoZQjDePWeF4F1TeE62l4J0zuCNrwqg",
  authDomain: "privatebank-44a03.firebaseapp.com",
  projectId: "privatebank-44a03",
  storageBucket: "privatebank-44a03.appspot.com",
  messagingSenderId: "420672698461",
  appId: "1:420672698461:web:28c842a9d15281e35735b4",
  measurementId: "G-QXM30RXDD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
