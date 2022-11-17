import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "../../pages/admin/admin.module.css";
import { IKContext, IKUpload } from "imagekitio-react";
import dynamic from "next/dynamic";

export default function NewWindow({ setNewWindow }) {
  const [descriptionHTML, setDescriptionHTML] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const [mainimageurl, setmainimageurl] = React.useState(null);

  const saveBlog = (e) => {
    e.preventDefault();
    if (!title || !descriptionHTML || !mainimageurl) return;

    let createDate = new Date().toDateString();
    let createTime = new Date().toTimeString();
    const categoryarray = categories.split(",");
    const object = {
      title,
      descriptionHTML,
      categories: categoryarray,
      mainimage: mainimageurl,
      createDate,
      createTime,
    };

    fetch("/api/postblogs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(object),
    });

    setTitle("");
    setDescriptionHTML("");
    setCategories("");
  };

  const closewindow = () => {
    setNewWindow(false);
  };

  const onError = (error) => {
    console.log(error);
  };

  const onSuccess = (success) => {
    if (success.url) {
      setmainimageurl(success.url);
    }
  };

  const Editor = dynamic(() => import("../richtext"), { ssr: false });

  return (
    <div className={styles.backgroundblur}>
      <FontAwesomeIcon
        onClick={closewindow}
        className={styles.closeicon}
        icon={faClose}
      />

      <div className={styles["edit-container"]}>
        <form onSubmit={saveBlog} className={styles.formcontainer}>
          <label htmlFor="title">Title</label>
          <input
            tabIndex={1}
            id="title"
            className={styles["input-title"]}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Start with a title"
          />

          <label htmlFor="uploadsection">Upload image</label>

          <IKContext
            publicKey="public_AHmlYI8eWoxqSutDX1YvCCGNX2k="
            urlEndpoint="https://ik.imagekit.io/ylyzsq6uc"
            authenticationEndpoint="http://localhost:3000/api/uploadimage"
          >
            <IKUpload
              id="uploadsection"
              fileName="code2.png"
              onError={onError}
              onSuccess={onSuccess}
            />
          </IKContext>

          <label htmlFor="description">Description</label>
          <div className={styles.richtext}>
            <Editor
              value={descriptionHTML}
              setDescriptionHTML={setDescriptionHTML}
            />
          </div>

          <label htmlFor="categories">Categories (seperated by a coma)</label>
          <input
            id="categories"
            className={styles["category-input"]}
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
          <button className={styles.submitbtn} type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
