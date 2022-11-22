import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection , addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
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

