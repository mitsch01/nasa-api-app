// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoHe13SFNaTCamjeJLSGLzBSfHeMmc48E",
  authDomain: "appauthentication-54b73.firebaseapp.com",
  projectId: "appauthentication-54b73",
  storageBucket: "appauthentication-54b73.appspot.com",
  messagingSenderId: "821526944212",
  appId: "1:821526944212:web:bb01dfd16badabd61c1e41"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
