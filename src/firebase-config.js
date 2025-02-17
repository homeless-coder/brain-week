// src/firebase-config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD8iIVkWY4RTuhTWR8mxVZLrzSwB6hADiQ",
    authDomain: "semana-del-cerebro-2025-unah.firebaseapp.com",
    projectId: "semana-del-cerebro-2025-unah",
    storageBucket: "semana-del-cerebro-2025-unah.firebasestorage.app",
    messagingSenderId: "420070127703",
    appId: "1:420070127703:web:7329c2c1c098e6faefcb12"
};

const app = initializeApp(firebaseConfig);
export default app;