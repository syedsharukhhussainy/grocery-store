import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoUU9GkhFezxtmHatZ7caT7ztRulrM7KY",
  authDomain: "testing-app-872ac.firebaseapp.com",
  projectId: "testing-app-872ac",
  storageBucket: "testing-app-872ac.appspot.com",
  messagingSenderId: "550599333154",
  appId: "1:550599333154:web:b6f8ff00677d54db23c17b",
  measurementId: "G-JP41E5LYM2",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, app, firestore, storage };
