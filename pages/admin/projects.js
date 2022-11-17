import React from "react";
import styles from "./admin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faFileEdit } from "@fortawesome/free-solid-svg-icons";
import ProjectNewWindow from "../../component/admin/ProjectNewWindow";
import ProjectEditWindow from "../../component/admin/ProjectEditWindow";

export async function getServerSideProps() {
  const projects = await fetch("http://localhost:3000/api/getprojects")
    .then((res) => res.json())
    .then((data) => data);

  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isNewWindow, setNewWindow] = React.useState(false);
  const [isEditMode, setEditMode] = React.useState(false);

  const openDeleteModal = () => setIsOpen(true);

  const projectJSX = new Array(20).fill(0).map((project, i) => {
    return (
      <div key={i} className={styles.projectcontainer}>
        <img src="/banners/5.png" />
        <div className={styles.projectinfo}>
          <div className={styles.icons}>
            <FontAwesomeIcon
              className={styles.icon}
              onClick={openDeleteModal}
              icon={faTrashCan}
            />
            <FontAwesomeIcon
              className={styles.icon}
              icon={faFileEdit}
              onClick={() => setEditMode(true)}
            />
          </div>

          <h2>Temperature controling formula</h2>

          <p>
            GitHub Link : <br /> https://www.github.com/rohit-rew/asd.gh
          </p>
          <p>
            Live Link :<br /> https://www.github.com/rohit-rew/asd.gh
          </p>
          <p>
            Display window :<br /> square cards
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      {isOpen && <DeleteModal setIsOpen={setIsOpen} />}
      {isNewWindow && <ProjectNewWindow closeWindow={setNewWindow} />}
      {isEditMode && <ProjectEditWindow closeWindow={setEditMode} />}
      <div className={styles.projectpage}>
        <div className={styles.projectarea}>
          {projectJSX}
          <button
            onClick={() => setNewWindow(true)}
            className={styles.addnewbtn}
          >
            + New Project
          </button>
        </div>
      </div>
    </>
  );
}

function DeleteModal({ setIsOpen }) {
  const deleteconfirm = (id) => {
    console.log(`deleted project with id : id`);
    setIsOpen(false);
  };

  return (
    <div className={styles.backgroundblur}>
      <div className={styles.deletemodal}>
        <p>Are you sure you want to delete the project : 123123 ?</p>

        <div className={styles.btncontainer}>
          <button onClick={() => deleteconfirm()} className={styles.deletebtn}>
            Delete
          </button>
          <button onClick={() => setIsOpen(false)} className={styles.cancelbtn}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
