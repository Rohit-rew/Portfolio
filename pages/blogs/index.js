import Footer from "../../component/footer";
import Link from "next/link";
import styles from "./blogpage.module.css";
import { getBlogs } from "../../lib/serversideprops/firebaseinit";

export async function getServerSideProps() {
  let blogs = []
  const snapshot = await getBlogs;
  const data = snapshot.docs.forEach(doc=>{
    blogs.push({...doc.data() , id : doc.id})
  })

  return {
    props: {
      blogs,
    },
  };
}

export default function Blogs({ blogs }) {

  const blogsjsx = blogs.map((blog , i) => {
    return (
      <Link href={`/blogs/${blog.id}`} key={i}>
      <div className={styles.blogscontainer}>
        <img src={blog.mainimage} />
        <h2>{blog.title}</h2>
      </div>
      </Link>
    );
  });

  return (
    <>
      <div className={styles.blogcontainer}>{blogsjsx}</div>
      <Footer />
    </>
  );
}
