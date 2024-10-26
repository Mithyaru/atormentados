// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getfirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKasFRKjlQrlZAjsElxYhePZGd9NX2C0Q",
  authDomain: "hackathon-1287e.firebaseapp.com",
  databaseURL: "https://hackathon-1287e-default-rtdb.firebaseio.com",
  projectId: "hackathon-1287e",
  storageBucket: "hackathon-1287e.appspot.com",
  messagingSenderId: "547596087236",
  appId: "1:547596087236:web:5ea65662550856e1883e91",
  measurementId: "G-6CP35Z8CN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getfirestore(app);