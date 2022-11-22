import React from "react";
import styles from "../../pages/admin/admin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { IKContext, IKUpload } from "imagekitio-react";

export default function ProjectEditWindow({ closeWindow, project }) {
  const [image, setimage] = React.useState(project.mainimage);

  const onSuccess = (success) => {
    setimage(success.url);
  };

  const onError = (error) => {
    console.log(error);
  };

  const updateProject = (e) => {
    e.preventDefault();
    const updateBody ={
      title :e.target.projectTitle.value,
      githuburl : e.target.githubLink.value,
      livelink :e.target.liveLink.value,
      displaywindow :(e.target.displayWindows.value).split(","),
      technology :(e.target.technology.value).split(","),
      mainimage: image,
    }

    fetch("/api/updateProject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({updateBody ,id : project.id }), //put the update body here
    });
  };

  return (
    <div className={styles.backgroundblur}>
      <FontAwesomeIcon
        onClick={() => closeWindow({ isOpen: false, project: [] })}
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

          <form
            onSubmit={(e) => updateProject(e)}
            className={styles.projectform}
          >
            <label htmlFor="projectTitle">Project Name :</label>
            <input
              id="projectTitle"
              type={"text"}
              defaultValue={project.title}
            />
            <label htmlFor="githubLink">Project Github Link :</label>
            <input
              id="githubLink"
              type={"text"}
              defaultValue={project.githuburl}
            />
            <label htmlFor="liveLink">Project Live Link :</label>
            <input
              id="liveLink"
              type={"text"}
              defaultValue={project.livelink}
            />
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
  );
}
