import styles from "./admin.module.css";
import Link from "next/link";
import React from "react";
import Router from "next/router";

export default function Dashboard() {

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
