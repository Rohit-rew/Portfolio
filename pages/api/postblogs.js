import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";

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

  if (req.method == "POST") {
    console.log(req.body);
    const { title, descriptionHTML, mainimage, categories } = req.body;

    addDoc(collref, {
      title,
      descriptionHTML,
      mainimage,
      categories
    }).then(() => {
      res.status(200).json({ succes: true }); 
    }).catch(err=>{
      res.status(400).json({success :false})
    });
  }
}
