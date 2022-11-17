import Link from "next/link";
import React, { Fragment } from "react";
import styles from "../admin/admin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faFileEdit } from "@fortawesome/free-solid-svg-icons";
import Editwindow from "../../component/admin/BlogEditwindow";
import NewWindow from "../../component/admin/BlogNewWindow";

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
  const [deleteModal, setIsOpen] = React.useState({ isopen: false, blog: "" });
  const [editwindow, seteditwindow] = React.useState({
    isopen: false,
    blog: "",
  });
  const [newWindow, setNewWindow] = React.useState(false);

  const opendeletedialog = (i) => {
    setIsOpen({
      isopen: true,
      id: i,
    });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openEditor = (blog) => {
    seteditwindow({
      isopen: true,
      blog: blog,
    });
  };

  const blogjsx = blogs.data.map((blog , i) => {
    return (
      <Fragment key={i}>
        <div className={styles.griditems}>
          <div className={styles.blog}></div>

          <div className={styles.blog}>
            <div className={styles.icons}>
              <FontAwesomeIcon
                onClick={() => opendeletedialog(blog.id)}
                icon={faTrashCan}
              />
              <FontAwesomeIcon
                onClick={() => openEditor(blog)}
                icon={faFileEdit}
              />
            </div>
            <h2>{blog.title}</h2>
            <div>{/* // here  */}</div>
            <div className={styles.infocontainer}>
              <p>Posted on : NA</p>
              <p>Author : NA</p>

              <p>
                Categories :{" "}
                {blog.categories.map((category , i) => {
                  return <Fragment key={i}>{category},</Fragment>;
                })}
              </p>
            </div>
          </div>
        </div>
        </Fragment>
    );
  });

  return (
    <>
      {deleteModal.isopen && (
        <DeleteModal closeModal={closeModal} id={deleteModal.id} />
      )}
      {editwindow.isopen && (
        <Editwindow seteditwindow={seteditwindow} editwindow={editwindow} />
      )}

      {newWindow && <NewWindow setNewWindow={setNewWindow} />}

      <div className={styles.blogpage}>
        <div className={styles.blogarea}>
          {blogjsx}
          <button
            onClick={() => setNewWindow(true)}
            className={styles.addnewbtn}
          >
            + Add New
          </button>
        </div>
      </div>
    </>
  );
}

function DeleteModal({ closeModal, id }) {
  const deleteconfirm = (id) => {
    console.log(`deleted blog with id : ${id}`);
    closeModal();
  };

  return (
    <div className={styles.backgroundblur}>
      <div className={styles.deletemodal}>
        <p>Are you sure you want to delete the blog post with id : 123123 ?</p>

        <div className={styles.btncontainer}>
          <button
            onClick={() => deleteconfirm(id)}
            className={styles.deletebtn}
          >
            Delete
          </button>
          <button onClick={closeModal} className={styles.cancelbtn}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
