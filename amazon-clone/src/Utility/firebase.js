// https://firebase.google.com/docs/web/setup#available-libraries
// Import the necessary functions from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrU8xDpUaj0kKPS7nSEgxXb2vzN2YHAXw",
    authDomain: "clone-922d1.firebaseapp.com",
    projectId: "clone-922d1",
    storageBucket: "clone-922d1.appspot.com",
    messagingSenderId: "855207142595",
    appId: "1:855207142595:web:de4e051aeadbf727082e76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
