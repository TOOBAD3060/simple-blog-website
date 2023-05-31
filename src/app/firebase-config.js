// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore"

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.api,
  authDomain: "blog-site-5c718.firebaseapp.com",
  projectId: "blog-site-5c718",
  storageBucket: "blog-site-5c718.appspot.com",
  messagingSenderId: "87210126711",
  appId: "1:87210126711:web:d6e36adde9234849c90572",
  measurementId: "G-TGRGM5K962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 
// const analytics = getAnalytics(app);
