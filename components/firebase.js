// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection,db } from "firebase/firestore";
 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
  const firebaseConfig = {
    apiKey: "AIzaSyA_ATSxcgk8M__Rypq8RjU92zT4IeSb2q4",
    authDomain: "cards-info-4fba4.firebaseapp.com",
    projectId: "cards-info-4fba4",
    storageBucket: "cards-info-4fba4.appspot.com",
    messagingSenderId: "319409774567",
    appId: "1:319409774567:web:643aacb3a7d7e7d17b2742",
    measurementId: "G-6G9PV73ZQ1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const testCollection = collection(db, "items");
  return getDatabase(app)
 
 