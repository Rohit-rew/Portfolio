import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function (req, res) {
  const db = getFirestore();
  const projectRef = collection(db, "projects");

  if ((req.method = "POST")) {
    const newproject = JSON.parse(req.body);

    if (req.body) {
      addDoc(projectRef, newproject)
        .then(() => {
          res.status(200).json({ succes: true });
        })
        .catch((err) => {
          res.status(400).json({ success: false });
        });
    }
  }
}
