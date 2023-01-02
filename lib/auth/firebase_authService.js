import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/constants";
import { getAuth } from "firebase/auth";

export class AuthService {
  constructor() {
    this.app = initializeApp()
    this.auth = getAuth()
  }

  currentUser() {
    console.log(this.auth);
    return this.auth;
  }


}
