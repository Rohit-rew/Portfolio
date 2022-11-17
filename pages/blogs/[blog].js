import React from "react";
import blogpage from "./blogpage.module.css";
import { getDoc , doc, getFirestore } from "firebase/firestore";

export async function getServerSideProps(context) {
  const {blog} = context.query
  const docref = doc(getFirestore(),"blogs" , blog);
  const snapshot = getDoc(docref);
  const blogdata = (await snapshot).data()

  return {
    props : {
      blogdata
    }
  }
}

export default function Blog({blogdata}) {

  console.log(blogdata)
  React.useEffect(() => {
    const descriptionarea = document.getElementById("descriptionarea");
    descriptionarea.innerHTML = blogdata.descriptionHTML;
  });

  return (
    <div className={blogpage.container}>
      <div className={blogpage.area}>
        <h1>{blogdata.title}</h1>

        <div className={blogpage.mainimagecontainer}>
          <img className={blogpage.mainimage} src={blogdata.mainimage} />
        </div>

        <div id="descriptionarea" className={blogpage.descriptionarea}>
          {/* // the description body goes here */}
        </div>
      </div>
    </div>
  );
}
