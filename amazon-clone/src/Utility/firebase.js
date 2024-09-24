// https://firebase.google.com/docs/web/setup#available-libraries
// Import the necessary functions from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIIREBASE_APP_ID,
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
