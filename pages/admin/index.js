import styles from "./admin.module.css";
import React from "react";
import Router from "next/router";
import { AuthService } from "../../lib/auth/firebase_authService";

export default function AdminLogin() {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const loggedIn = false

  function login(){
    console.log("logging in")
  }

  React.useEffect(()=>{
    if(loggedIn){
      Router.push("/admin/dashboard")
    }

    const _authService = new AuthService()
    _authService.currentUser()
  })

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
