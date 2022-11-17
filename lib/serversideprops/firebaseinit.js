import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHXqwvVGgE-ppN8Kcx-CZrc1lLbGxpKko",
  authDomain: "portfolio-eb4db.firebaseapp.com",
  projectId: "portfolio-eb4db",
  storageBucket: "portfolio-eb4db.appspot.com",
  messagingSenderId: "351076912783",
  appId: "1:351076912783:web:0e28f1917bfdaada85aafa",
  measurementId: "G-7YJHZMPVKG",
};

//initialize firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


// initilize collections
const colref = collection(db, "projects");


// exports
export const getProjects =  getDocs(colref)