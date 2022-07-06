// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz1kt39guIsbYZ_SnP9YscOHow1vAwPos",
  authDomain: "todofirebase-auth.firebaseapp.com",
  databaseURL: "https://todofirebase-auth-default-rtdb.firebaseio.com",
  projectId: "todofirebase-auth",
  storageBucket: "todofirebase-auth.appspot.com",
  messagingSenderId: "453239695163",
  appId: "1:453239695163:web:4cb0f8008d81508dd7391e",
  measurementId: "G-BXMZHKD746"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();