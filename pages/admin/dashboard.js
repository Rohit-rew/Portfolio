import styles from "./admin.module.css";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";

export default function Admin() {
  const [islogged, setislogged] = React.useState(true);

  const data = useSession();

  React.useEffect(() => {
    if (data.status == "unauthenticated") {
      Router.replace("/admin");
    }
  });

  if (data.status == "authenticated") {
    return (
     
        <div className={styles.container}>
          <Link href={"/admin/blogs"}>
            <div className={styles.btn}>Blogs</div>
          </Link>

          <Link href={"/admin/projects"}>
            <div className={styles.btn}>Projects</div>
          </Link>
        </div>
    );
  }
}
