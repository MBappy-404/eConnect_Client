// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId:  process.env.REACT_APP_appId,

  apiKey: "AIzaSyAH1oWaqYWb6cItUbad9blqWSTysP0ITN4",
  authDomain: "esomaz.firebaseapp.com",
  projectId: "esomaz",
  storageBucket: "esomaz.appspot.com",
  messagingSenderId: "780820586711",
  appId: "1:780820586711:web:1e848cc90061e684bc9092"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;