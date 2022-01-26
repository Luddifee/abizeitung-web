// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
  signInAnonymously,
  getAuth,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
import {
  getFirestore,
  collection as dbCol,
  doc as dbDoc,
  getDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfYqX4XPmgJ3lWdzc66lAuGEHVWhjdr3s",
  authDomain: "gympeg-abizeitung.firebaseapp.com",
  projectId: "gympeg-abizeitung",
  storageBucket: "gympeg-abizeitung.appspot.com",
  messagingSenderId: "232535777638",
  appId: "1:232535777638:web:ad2eb5602fa8d3a89128a7",
  measurementId: "G-YM1XGVZFQY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const collection = dbCol;
export const doc = dbDoc;
export const setDocument = setDoc;
export const getDocument = getDoc;

export const signIn = async () => {
  if (auth.currentUser === null) {
    await signInAnonymously(auth);
  }
}
