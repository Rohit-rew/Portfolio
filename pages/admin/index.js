import styles from "./admin.module.css";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import Router from "next/router";

export default function AdminLogin() {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const data = useSession();

  async function login() {
    const data = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    const status = JSON.parse(JSON.stringify(data));

    console.log(status.ok);
    if (status.ok) {
      Router.replace("/admin/dashboard");
    } else [Router.replace("/admin")];
  }

  if (data.status == "loading") {
    return <h1>Loading....</h1>;
  } else if (data.status == "authenticated") {
    Router.replace("/admin/dashboard");
  } else if (data.status == "unauthenticated") {
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
}
