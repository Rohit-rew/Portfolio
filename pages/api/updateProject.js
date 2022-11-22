import {
    getFirestore,
    updateDoc,
    doc
  } from "firebase/firestore";
    
  // server function
  export default function (req, res) {
    const db = getFirestore();
  
    console.log(req.body)
    if (req.method == "POST") {
      const { id , updateBody } = req.body;
      const docRef = doc(db , "projects" , id)
      updateDoc(docRef , updateBody)
      .then(()=>{
          res.status(200).json({success : true})
      }).catch((err)=>{
          res.status(400).json({success : false , message : err.message})
      })
  
    }
  }