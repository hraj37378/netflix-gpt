
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: "netflix-b374c.firebaseapp.com",
  projectId: "netflix-b374c",
  storageBucket: "netflix-b374c.firebasestorage.app",
  messagingSenderId: "284597855356",
  appId: "1:284597855356:web:f19044199a8bdc890f95f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();