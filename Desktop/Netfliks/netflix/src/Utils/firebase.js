// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgXLOw7pV1SMhbnUQr-MGqyJHQmeQSwFI",
  authDomain: "netflixgpt-e8090.firebaseapp.com",
  projectId: "netflixgpt-e8090",
  storageBucket: "netflixgpt-e8090.appspot.com",
  messagingSenderId: "210928363480",
  appId: "1:210928363480:web:05856ab69036e4e96134ad",
  measurementId: "G-NHMDX5SEE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

