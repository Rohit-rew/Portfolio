import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  updateDoc,
  doc
} from "firebase/firestore";

// configure firebase
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
  
// server function
export default function (req, res) {
  const db = getFirestore();
  const collref = collection(db, "blogs");

  if (req.method == "POST") {
    const { id , object } = req.body;
    const docRef = doc(db , "blogs" , id)

    updateDoc(docRef , object)
    .then(()=>{
        res.status(200).json({success : true})
    }).catch((err)=>{
        res.status(400).json({success : false , message : err.message})
    })

  }
}
