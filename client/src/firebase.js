 // Import the functions you need from the SDKs you need
import * as firebase from 'firebase';

 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBM9fXl1uX4dIfIzcySkiESSAdnvWthJKI",
   authDomain: "ecommerce-c1e70.firebaseapp.com",
   projectId: "ecommerce-c1e70",
   storageBucket: "ecommerce-c1e70.appspot.com",
   messagingSenderId: "423290512851",
   appId: "1:423290512851:web:6f67c7e35b6040c8d17b26"
 };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth= firebase.auth();
export const googleAuthProvider= new firebase.auth.googleAuthProvider();