import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBmKiTW2mO8rjh5_KFMbcM4LYSBfwnndbI",
  authDomain: "curd-website-nextjs.firebaseapp.com",
  projectId: "curd-website-nextjs",
  storageBucket: "curd-website-nextjs.appspot.com",
  messagingSenderId: "1052553848257",
  appId: "1:1052553848257:web:806856a282c074a7473b40"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getFirestore();

export {app, database }
export const auth = getAuth();