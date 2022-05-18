// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCveWd4JniNyv9n4Gw2n23W0Mw1Axa01dg",
  authDomain: "todoapps-d96f1.firebaseapp.com",
  projectId: "todoapps-d96f1",
  storageBucket: "todoapps-d96f1.appspot.com",
  messagingSenderId: "48905611197",
  appId: "1:48905611197:web:10777871686cad4b4694d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app) 
export default auth