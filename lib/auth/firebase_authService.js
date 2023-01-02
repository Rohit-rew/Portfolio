import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/constants";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";

export class AuthService {
  constructor() {
    this.app = initializeApp(firebaseConfig)
    this.auth = getAuth()
  }

  currentUser() {
    return this.auth;
  }

  async loginUser(email , password){
   const userCreds = await signInWithEmailAndPassword(this.auth , email , password)
   return userCreds
  }


}
