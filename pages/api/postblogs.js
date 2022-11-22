import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
  
export default function (req, res) {
  const db = getFirestore();
  const collref = collection(db, "blogs");

  if (req.method == "POST") {
    const newBlog = JSON.parse(req.body);
    addDoc(collref, newBlog).then(() => {
      res.status(200).json({ succes: true }); 
    }).catch(err=>{
      res.status(400).json({success :false})
    });
  }
}
