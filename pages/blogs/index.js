import Footer from "../../component/footer";
import Link from "next/link";
import styles from "./blogpage.module.css";
import { FirebaseService } from "../../lib/firebase/firebaseinit";

export async function getServerSideProps() {

  const _firebaseService = new FirebaseService()
  const blogs = await _firebaseService.getBlogs()

  return {
    props: {
      blogs,
    },
  };
}

export default function Blogs({ blogs }) {
  const blogsjsx = blogs.map((blog, i) => {
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
    <div className={styles.blogpage}>
      <div className={styles.blogcontainer}>
        <div className={styles.blogArea}>
          {blogsjsx}
        </div>

        <div className={`static-text-area ${styles.tempcolor}`}>
          <p className="minitext">BRANDING</p>
          <h1>Contribute your knowledge by <br/>writing blogs</h1>
          <p>
            Subscribe to my blogs channel and get read the blogs on latest tech topics
            <br/>
            <br/>
            Click the button below to subscribe.
          </p>

          <div className="buttoncouple">
            <button className="contact-me">Subscribe</button>
            <button className="follow-me">Follow me</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
