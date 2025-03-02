// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA8xpB4uhRtznQd2l872TAoHc8rD6MKFFs",
  authDomain: "job-portal-poroject.firebaseapp.com",
  projectId: "job-portal-poroject",
  storageBucket: "job-portal-poroject.firebasestorage.app",
  messagingSenderId: "380224182418",
  appId: "1:380224182418:web:f6666c97f17b4fd812ae4b",
  measurementId: "G-QPVN7P385N",
  // apiKey: import.meta.env.VITE_apikey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
  // measurementId: import.meta.env.VITE_measurementId,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
