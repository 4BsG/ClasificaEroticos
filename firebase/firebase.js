import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIiuwKkTDeFzc5F3beP5iHgXvK5zZWMHU",
  authDomain: "bsg-a39a1.firebaseapp.com",
  projectId: "bsg-a39a1",
  storageBucket: "bsg-a39a1.appspot.com",
  messagingSenderId: "317693141413",
  appId: "1:317693141413:web:e64b90d6dbcef6a787084c"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
