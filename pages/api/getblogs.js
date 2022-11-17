import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
} from "firebase/firestore";

// config firebase
const firebaseConfig = {
  apiKey: "AIzaSyBHXqwvVGgE-ppN8Kcx-CZrc1lLbGxpKko",
  authDomain: "portfolio-eb4db.firebaseapp.com",
  projectId: "portfolio-eb4db",
  storageBucket: "portfolio-eb4db.appspot.com",
  messagingSenderId: "351076912783",
  appId: "1:351076912783:web:0e28f1917bfdaada85aafa",
  measurementId: "G-7YJHZMPVKG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function (req, res) {
  const db = getFirestore();
  const collref = collection(db, "blogs");
  onSnapshot(collref, (snapshot) => {
    let blogs = [];
    snapshot.docs.forEach((doc) => {
      blogs.push({ ...doc.data(), id: doc.id });
    });
    res.status(200).json({ data: blogs });
  });
}
