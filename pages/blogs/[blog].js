import React from "react";
import blogpage from "./blogpage.module.css";
import { FirebaseService } from "../../lib/firebase/firebase_firestore";
import Error from "next/error";


export async function getServerSideProps(context) {
  const {blog} = context.query
  const _firestoreService = new FirebaseService()
  let blogdata = {}
  try {
    blogdata = await _firestoreService.getOneBlog(blog)
  } catch (error) {
    console.log("error in serverside porps")
    console.log(error)
    blogdata = {}
  }

  return {
    props : {
      blogdata
    }
  }
}

export default function Blog({blogdata}) {

  
  
  React.useEffect(() => {
    if(!blogdata.title) return
    const descriptionArea = document.getElementById("descriptionarea");
    descriptionArea.innerHTML = blogdata.descriptionHTML;
  });

  if(!blogdata.title) return <Error statusCode={404}/>

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
