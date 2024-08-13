// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVsZzuRXTD9ZswWhXowt1LZahemm7XY68",
  authDomain: "cse-p-diu.firebaseapp.com",
  projectId: "cse-p-diu",
  storageBucket: "cse-p-diu.appspot.com",
  messagingSenderId: "378033638864",
  appId: "1:378033638864:web:dad85c412968d11889fdd5",
  measurementId: "G-36197N9909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);