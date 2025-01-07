// import { firestore } from '@/firebase/firebase';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp, getApps, getApp } from "firebase/app";



const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-GM950YPXC7"
};
console.log(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const app = !getApps.length ? initializeApp(firebaseConfig):getApp();
// const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const firebase = getFireStone(app);
const firestore = getFirestore(app);
// const analytics = getAnalytics(app);
export {auth,firestore,app}