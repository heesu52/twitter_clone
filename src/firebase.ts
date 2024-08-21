import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCz74jPwN9DlZzrxPmiE5e4MI7RYhBXl7E",
  authDomain: "twitter-clone-5e567.firebaseapp.com",
  projectId: "twitter-clone-5e567",
  storageBucket: "twitter-clone-5e567.appspot.com",
  messagingSenderId: "754252883313",
  appId: "1:754252883313:web:2ffac245530de2c80082d0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);