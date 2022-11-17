import Footer from "../../component/footer";
import Link from "next/link";
import styles from "./blogpage.module.css";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export async function getServerSideProps() {
  const blogs = await fetch("http://localhost:3000/api/getblogs")
    .then((res) => res.json())
    .then((data) => data);

  return {
    props: {
      blogs,
    },
  };
}

export default function Blogs({ blogs }) {
  console.log(blogs.data);

  const blogsjsx = blogs.data.map((blog) => {
    return (
      <Link href={`/blogs/${blog.id}`}>
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
