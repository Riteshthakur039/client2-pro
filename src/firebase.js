// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBBa1TJvSommbAIxktHVABrO5fMaGNJBg",
  authDomain: "ecom-1c958.firebaseapp.com",
  projectId: "ecom-1c958",
  storageBucket: "ecom-1c958.appspot.com",
  messagingSenderId: "46656968657",
  appId: "1:46656968657:web:a8070386f8cf19614772f0",
  databaseURL: "https://ecom-1c958-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);