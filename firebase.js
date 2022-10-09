import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {getStorage } from 'firebase/storage' 
import {initializeFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBmHAp2pB2cchNJA9XDGSokZzMUL-zmqXk",
  authDomain: "clon-wp-bitirme.firebaseapp.com",
  projectId: "clon-wp-bitirme",
  storageBucket: "clon-wp-bitirme.appspot.com",
  messagingSenderId: "914936820814",
  appId: "1:914936820814:web:434b2cfd6ffc3a231cff1f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db =   initializeFirestore(app , {experimentalForceLongPolling : true})

export function signIn(email,password){
    return signInWithEmailAndPassword(auth, email,password)
}
export function signUp (email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}