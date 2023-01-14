// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import  {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsEGJZBU0_DP0LYAlT6HyY6C6neMDlK14",
  authDomain: "chat-app-33abb.firebaseapp.com",
  projectId: "chat-app-33abb",
  storageBucket: "chat-app-33abb.appspot.com",
  messagingSenderId: "879483539592",
  appId: "1:879483539592:web:1277a6354a835933c10f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);