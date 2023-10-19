// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-VJfXaOn13u3jk88alXvJV_Bmj4pWqzs",
  authDomain: "prectise2-user-email-password.firebaseapp.com",
  projectId: "prectise2-user-email-password",
  storageBucket: "prectise2-user-email-password.appspot.com",
  messagingSenderId: "975220746850",
  appId: "1:975220746850:web:3aa202a2631a49b2083f3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;