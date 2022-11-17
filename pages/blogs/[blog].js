import Router from "next/router";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import blogpage from "./blogpage.module.css";

export async function getServerSideProps() {

  const books = await fetch("http://localhost:3000/api/getblogs")
    .then((res) => res.json())
    .then((data) => data);

  return {
    props: {
      books,
    },
  };
}

export default function Blog({ books }) {

  
  React.useEffect(() => {
    const descriptionarea = document.getElementById("descriptionarea");
    descriptionarea.innerHTML = books.data[0].descriptionHTML;
  });

  // the below query contains the id in url
  const { query } = useRouter();
  // console.log(query.blog);

  return (
    <div className={blogpage.container}>
      <div className={blogpage.area}>
        <h1>{books.data[0].title}</h1>

        <div className={blogpage.mainimagecontainer}>
          <img className={blogpage.mainimage} src={books.data[0].mainimage} />
        </div>

        <div id="descriptionarea" className={blogpage.descriptionarea}>
          {/* // the description body goes here */}
        </div>
      </div>
    </div>
  );
}
