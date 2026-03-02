// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABUEKHdOWGKTrf-Tj0nkTwTSvAe-lrk-s",
  authDomain: "kid-toy-zone.firebaseapp.com",
  projectId: "kid-toy-zone",
  storageBucket: "kid-toy-zone.firebasestorage.app",
  messagingSenderId: "442030828313",
  appId: "1:442030828313:web:3bd690a6bf4b01a32e3388",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;