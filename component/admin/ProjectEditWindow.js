import React from 'react'
import styles from "../../pages/admin/admin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {IKContext , IKUpload } from "imagekitio-react";


export default function ProjectEditWindow({closeWindow}) {
  const [image, setimage] = React.useState("");


  const onSuccess = (success) => {
    console.log(success)
    setimage(success.url);
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <div className={styles.backgroundblur}>
    <FontAwesomeIcon
      onClick={() => closeWindow(false)}
      className={styles.closeicon}
      icon={faClose}
    />

    <div className={styles["edit-container"]}>
    <div className={styles.projecteditor}>
          <div className={styles.projectimagecontainer}>
            <IKContext
              publicKey="public_AHmlYI8eWoxqSutDX1YvCCGNX2k="
              urlEndpoint="https://ik.imagekit.io/ylyzsq6uc"
              authenticationEndpoint="http://localhost:3000/api/uploadimage"
            >
              <IKUpload
                className={styles.uploadbtn}
                id="uploadsection"
                fileName="code2.png"
                onError={onError}
                onSuccess={onSuccess}
              />
            </IKContext>
            <img src={image} />
          </div>

          <form onSubmit={(e) => addProject(e)} className={styles.projectform}>
            <label htmlFor="projectTitle">Project Name :</label>
            <input id="projectTitle" type={"text"} />
            <label htmlFor="githubLink">Project Github Link :</label>
            <input id="githubLink" type={"text"} />
            <label htmlFor="liveLink">Project Live Link :</label>
            <input id="liveLink" type={"text"} />
            <label htmlFor="displayWindows">Display Windows :</label>
            <input id="displayWindows" type={"text"} />
            <label htmlFor="technology">Technology Focus :</label>
            <input id="technology" type={"text"} />
            <button type="submit" className={styles.addproject}>
              Update
            </button>
          </form>
        </div>
      
    </div>
  </div>
  )
}
