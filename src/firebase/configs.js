import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDc-mVAgGEr5fJscQfQf4cQvjPpBgrY9us",
  authDomain: "fir-f551c.firebaseapp.com",
  projectId: "fir-f551c",
  storageBucket: "fir-f551c.firebasestorage.app",
  messagingSenderId: "658996730114",
  appId: "1:658996730114:web:dd04837342d73b16da4a1b",
  measurementId: "G-4VHWRSE8QX"
};

initializeApp(firebaseConfig);

const DB = getFirestore();
const AUTH = getAuth();

export{DB,AUTH}