import styles from "./admin.module.css";
import React from "react";
import Router from "next/router";
import axios from "axios";
import { FirebaseError } from "firebase/app";

export default function AdminLogin() {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");

  async function login(){

    if(email, password){
      try {
        const userCreds =  await axios.post("/api/login" , {
           email,
           password
         })
         console.log(userCreds)
      } catch (error) {
        if(error instanceof FirebaseError){
          console.log("firebase error catched")
        }
      }
      setemail("")
      setpassword("")
    }
  }

  React.useEffect(()=>{
    console.log("reloads")
    async function getUser(){
      const user = await axios.get("/api/getuser")
    }
    getUser()

  } , [0])

  return (
    <div className={styles.loginpage}>
      <div className={styles.loginbox}>
        <fieldset>
          <legend>Email</legend>
          <input
            onChange={(e) => setemail(e.target.value)}
            type={"email"}
            value={email}
          />
        </fieldset>

        <fieldset>
          <legend>Password</legend>
          <input
            onChange={(e) => setpassword(e.target.value)}
            type={"password"}
            value={password}
          />
        </fieldset>

        <button onClick={login} className={styles.loginbutton}>
          LogIn
        </button>
      </div>
    </div>
  );
}
