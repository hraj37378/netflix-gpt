/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: "netflixgpt-193ab.firebaseapp.com",
  projectId: "netflixgpt-193ab",
  storageBucket: "netflixgpt-193ab.firebasestorage.app",
  messagingSenderId: "589588814728",
  appId: "1:589588814728:web:c7248f5b8de4ffbc7bb83d",
  measurementId: "G-WZVQLW5KV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();