import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
<<<<<<< HEAD
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
=======
  apiKey: "AIzaSyCz74jPwN9DlZzrxPmiE5e4MI7RYhBXl7E",
  authDomain: "twitter-clone-5e567.firebaseapp.com",
  projectId: "twitter-clone-5e567",
  storageBucket: "twitter-clone-5e567.appspot.com",
  messagingSenderId: "754252883313",
  appId: "1:754252883313:web:2ffac245530de2c80082d0"
>>>>>>> fe673f6b2869723fc90769da2257229ff423fcd4
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
<<<<<<< HEAD
export const storage = getStorage(app);
export const db = getFirestore(app);
=======

export const storage = getStorage(app);

export const db = getFirestore(app);
>>>>>>> fe673f6b2869723fc90769da2257229ff423fcd4
