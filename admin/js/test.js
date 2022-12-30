 // onclick addschool button produces an alert
 var addSchool = document.getElementById("addSchool");
 function now() {
   alert("hello")
 }
addSchool.addEventListener("click", now);
 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA41TSZcwPpgIJMQu4QklY-2s8rJmHNdEw",
  authDomain: "elimu-pay.firebaseapp.com",
  databaseURL: "https://elimu-pay-default-rtdb.firebaseio.com",
  projectId: "elimu-pay",
  storageBucket: "elimu-pay.appspot.com",
  messagingSenderId: "282414316037",
  appId: "1:282414316037:web:fe8ba8144036dc70917a6c",
  measurementId: "G-CC9HDKLT7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);