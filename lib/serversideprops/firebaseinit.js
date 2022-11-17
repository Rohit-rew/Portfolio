import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection  ,doc,getDoc } from "firebase/firestore";

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
export const db = getFirestore();


// initilize collections
const projectColRef = collection(db, "projects");
const blogColref = collection(db, "blogs");

// exports
export const getProjects =  getDocs(projectColRef)
export const getBlogs =  getDocs(blogColref)

