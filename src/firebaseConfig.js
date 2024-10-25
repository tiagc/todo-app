// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ_Akxh3n2jI4hrkaccE9uz4N7-RZJBwU",
  authDomain: "todo-app-f4f12.firebaseapp.com",
  projectId: "todo-app-f4f12",
  storageBucket: "todo-app-f4f12.appspot.com",
  messagingSenderId: "1074592615077",
  appId: "1:1074592615077:web:809aaa9a2b92639d941b4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
