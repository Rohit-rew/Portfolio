import styles from "./admin.module.css";
import React from "react";
import Router from "next/router";
import axios from "axios";

export default function AdminLogin() {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [error , setError] = React.useState(null)

  async function login(){

    if(email, password){
      try {
        const userCreds =  await axios.post("/api/login" , {
           email,
           password
         })
         if(userCreds.status == 200){
          Router.push("/admin/dashboard")
         }
      } catch (error) {
        console.log(error)
        if(error.response.status == 429){
          setError(error.response.data)
        }else if(error.response.status == 404){
          setError(error.response.data)
        }
      }
      setpassword("")
    }
  }

  React.useEffect(()=>{
    console.log("reloads")

    async function getUser(){
      const user = await axios.get("/api/getuser")
      if(user.status==200){
        Router.push("/admin/dashboard")
      }
    }

    getUser()

  } , [0])

  return (
    <div className={styles.loginpage}>
      <div className={styles.loginbox}>
        {error && <p className={styles.errorMsg}>{error}</p>}
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
