// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkLWt2GrN-B23Ljb3oZahahVUv3sPK5GE",
  authDomain: "coffee-e55d9.firebaseapp.com",
  projectId: "coffee-e55d9",
  storageBucket: "coffee-e55d9.appspot.com",
  messagingSenderId: "309706024151",
  appId: "1:309706024151:web:327eda9e071dde8d75bc92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
