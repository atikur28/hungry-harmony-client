// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZLdwjqN2ZdzEcn-Toq_Ac1KTwbWDRUzA",
  authDomain: "hungry-harmony.firebaseapp.com",
  projectId: "hungry-harmony",
  storageBucket: "hungry-harmony.appspot.com",
  messagingSenderId: "902130850491",
  appId: "1:902130850491:web:e6edef75907017d920e79e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;