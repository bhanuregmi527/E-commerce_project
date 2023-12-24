 // Import the functions you need from the SDKs you need
 import { initializeApp } from 'firebase/app';
 import { getAuth,GoogleAuthProvider } from "firebase/auth";
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
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
const app= initializeApp(firebaseConfig);

export const auth= getAuth(app)
export const googleAuthProvider= new GoogleAuthProvider();