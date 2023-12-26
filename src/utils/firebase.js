// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcV8MBbOL1VZSovuNAu0zZXLeNDfIKkVI",
  authDomain: "netflixgpt-81a19.firebaseapp.com",
  projectId: "netflixgpt-81a19",
  storageBucket: "netflixgpt-81a19.appspot.com",
  messagingSenderId: "384208839123",
  appId: "1:384208839123:web:ed38a973c4ab4dbf940f26",
  measurementId: "G-ZRC8YN7HVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();