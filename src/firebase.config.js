// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAsnNfaXdxSY67GmXvrXPzBzQJpQ3JJsB8",
  authDomain: "job-box-c3c58.firebaseapp.com",
  projectId: "job-box-c3c58",
  storageBucket: "job-box-c3c58.firebasestorage.app",
  messagingSenderId: "304040394219",
  appId: "1:304040394219:web:31c2ae87da3398966a2dae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);