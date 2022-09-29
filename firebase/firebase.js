// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB02-LlPX9Y-Uv_TKyVZ_bhafBsUu92N7k',
  authDomain: 'boys-6dd9c.firebaseapp.com',
  projectId: 'boys-6dd9c',
  storageBucket: 'boys-6dd9c.appspot.com',
  messagingSenderId: '1097630543579',
  appId: '1:1097630543579:web:ee39fe2e073222056166fe'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
