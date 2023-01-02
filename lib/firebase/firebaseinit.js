import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { firebaseConfig } from "./constants";

export class FirebaseService {

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore();
  }

  async getBlogs() {
    const collRef = collection(this.db, "blogs");
    const docs = await getDocs(collRef);

    let blogs = [];
    docs.forEach((doc) => {
      blogs.push({...doc.data() , id : doc.id})
    });
    return blogs;
  }

  async getProjects(){
    const collRef = collection(this.db , "projects")
    const docs = await getDocs(collRef)
    const projects = []

    docs.forEach(doc=>{
      projects.push({...doc.data() , id : doc.id})
    })
    return projects
  }


}
