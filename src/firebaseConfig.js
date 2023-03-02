import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyBcwDCvUypD-BQFUmTLW6m6HxNi0cb8M28",

    authDomain: "telefonos-208-67525.firebaseapp.com",
  
    projectId: "telefonos-208-67525",
  
    storageBucket: "telefonos-208-67525.appspot.com",
  
    messagingSenderId: "387814970931",
  
    appId: "1:387814970931:web:a3889f17e5c3d4bdaf3546"
  
  
};
  

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth }