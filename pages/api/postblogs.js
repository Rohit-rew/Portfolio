import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";

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
  
export default function (req, res) {
  const db = getFirestore();
  const collref = collection(db, "blogs");

  if (req.method == "POST") {
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
