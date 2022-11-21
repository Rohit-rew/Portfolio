import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  updateDoc,
  doc
} from "firebase/firestore";

// configure firebase
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.send.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
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
