// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD31iUZAsUrjaZonN8ndcZPLMvOkfBFkPo",
    authDomain: "ema-john-simple-d193e.firebaseapp.com",
    projectId: "ema-john-simple-d193e",
    storageBucket: "ema-john-simple-d193e.appspot.com",
    messagingSenderId: "117481530637",
    appId: "1:117481530637:web:f9f794909e06748abdfc44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth 