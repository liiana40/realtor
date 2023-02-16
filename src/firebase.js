// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2qLPPHxhHzMMsGb90F0PUGveElmyj2PA",
  authDomain: "realtor-react-5993a.firebaseapp.com",
  projectId: "realtor-react-5993a",
  storageBucket: "realtor-react-5993a.appspot.com",
  messagingSenderId: "1072554152790",
  appId: "1:1072554152790:web:e4f9e9b08704692f4efcf7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()