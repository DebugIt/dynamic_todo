// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
// import {getDatabase} from 'firebase/database'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
import {useEffect, useState} from 'react'

const firebaseConfig = {
  apiKey: "AIzaSyC11Yi4N4cawOOidMM3WzowoXa6Ktu7ni0",
  authDomain: "dynamic-todo-74809.firebaseapp.com",
  projectId: "dynamic-todo-74809",
  storageBucket: "dynamic-todo-74809.appspot.com",
  messagingSenderId: "393770183253",
  appId: "1:393770183253:web:b149dfd9857e6d11a942dc",
  measurementId: "G-06WFPH15PN"
};


// const database = getDatabase();

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)


export function logout(){
    return signOut(auth);
}

export function useAuth(){
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsign = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        })
        
    }, [])
    return currentUser;
}


// google - googleAuthProvider, signInWithPopUp
export const goog = new GoogleAuthProvider();
export const signGoog = () => {
    signInWithPopup(auth, goog).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
}

