import {
  getFirestore,
  updateDoc,
  doc
} from "firebase/firestore";
  
// server function
export default function (req, res) {
  const db = getFirestore();

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
