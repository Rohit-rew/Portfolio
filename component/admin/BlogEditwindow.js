import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "../../pages/admin/admin.module.css"
import { IKContext, IKUpload } from "imagekitio-react";
import dynamic from "next/dynamic";

export default function EditWindow({ seteditwindow, editwindow }) {
  const [descriptionHTML, setDescription] = React.useState(editwindow.blog.descriptionHTML);
  const [title, setTitle] = React.useState(editwindow.blog.title || "");
  const [categories, setCategories] = React.useState(
    editwindow.blog.categories.toString() || ""
  );
  const [mainimageurl, setmainimageurl] = React.useState(null);

  const saveBlog = (e) => {
    e.preventDefault();

    const categoryarray = categories.split(",");
    const object = {
      title,
      descriptionHTML,
      categories: categoryarray,
      mainimage: mainimageurl,
    };

    fetch("/api/updateblog", {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify({
        id : editwindow.blog.id,
        object
      }),
    })
      .then((res) => res.json())
      .then((data) => data);
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
        onClick={() => seteditwindow(false)}
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
          />

          <IKContext
            publicKey="public_AHmlYI8eWoxqSutDX1YvCCGNX2k="
            urlEndpoint="https://ik.imagekit.io/ylyzsq6uc"
            authenticationEndpoint="http://localhost:3000/api/uploadimage"
          >
            <label htmlFor="uploadsection">Change Main Image</label>

            <div className={styles.imageholder}>
              <img src={mainimageurl || editwindow.blog.mainimage}/>
              <IKUpload
                className={styles.mainimageupload}
                id="uploadsection"
                fileName="code2.png"
                onError={onError}
                onSuccess={onSuccess}
                />
            </div>
          </IKContext>

          <label htmlFor="description">Description</label>
          <div className={styles.richtext}>
            <Editor value={descriptionHTML} setDescription={setDescription}  />
          </div>

          <label htmlFor="categories">Categories</label>
          <input
            id="categories"
            className={styles["category-input"]}
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />

          <button className={styles.submitbtn} type="submit">
            Make Changes
          </button>
        </form>
      </div>
    </div>
  );
}
