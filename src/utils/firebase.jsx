import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const { 
    SDC_FIREBASE_API_KEY,
    SDC_FIREBASE_AUTH_DOMAIN,
    SDC_FIREBASE_PROJECT_ID,
    SDC_FIREBASE_STORAGE_BUCKET,
    SDC_FIREBASE_MESSAGIN_SENDER_ID,
    SDC_FIREBASE_APP_ID
} = import.meta.env

const firebaseConfig = {
  apiKey: SDC_FIREBASE_API_KEY,
  authDomain: SDC_FIREBASE_AUTH_DOMAIN,
  projectId: SDC_FIREBASE_PROJECT_ID,
  storageBucket: SDC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: SDC_FIREBASE_MESSAGIN_SENDER_ID,
  appId: SDC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }