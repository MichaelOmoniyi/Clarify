// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2DwiixucjBJclGanFcFQ57Sx9XktrfY8",
  authDomain: "clarify-app-research.firebaseapp.com",
  projectId: "clarify-app-research",
  storageBucket: "clarify-app-research.appspot.com",
  messagingSenderId: "766953133684",
  appId: "1:766953133684:web:832ed120df626156a36321",
  measurementId: "G-6ZTBTBB6PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);