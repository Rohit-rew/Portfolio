import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  getDoc,
  doc,
  FirestoreError,
} from "firebase/firestore";
import { firebaseConfig } from "./constants";

class BlogNotFoundError extends Error {
  constructor(msg) {
    super(msg);
  }
}

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
      blogs.push({ ...doc.data(), id: doc.id });
    });
    return blogs;
  }

  async getOneBlog(blogId) {
    const blogRef = doc(this.db, "blogs", blogId);
    const snapshot = await getDoc(blogRef);
    const blog = snapshot.data();
    if (!blog) throw new BlogNotFoundError("Blog does not exists");
    return blog;
  }

  async getProjects() {
    const collRef = collection(this.db, "projects");
    const docs = await getDocs(collRef);
    const projects = [];

    docs.forEach((doc) => {
      projects.push({ ...doc.data(), id: doc.id });
    });
    return projects;
  }
}
