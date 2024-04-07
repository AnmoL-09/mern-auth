// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-authez.firebaseapp.com",
  projectId: "mern-authez",
  storageBucket: "mern-authez.appspot.com",
  messagingSenderId: "933122153816",
  appId: "1:933122153816:web:7f7c92aa0d19c0ca98d92d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);