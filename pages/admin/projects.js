import React from "react";
import styles from "./admin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faFileEdit } from "@fortawesome/free-solid-svg-icons";
import ProjectNewWindow from "../../component/admin/ProjectNewWindow";
import ProjectEditWindow from "../../component/admin/ProjectEditWindow";
import { getProjects } from "../../lib/serversideprops/firebaseinit";

export async function getServerSideProps() {

  const projects = [];
  const snapshot = await getProjects
  const res = snapshot.docs.forEach(doc=>{
    projects.push({...doc.data() , id : doc.id})
  })

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
// console.log(projects)
  const projectJSX = projects.map((project, i) => {
    return (
      <div key={i} className={styles.projectcontainer}>
        <img src={project.mainimage} />
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
          <h2>{(project.title).slice(0 , 25)}</h2>
          <p>GitHub url : <br /> {project.githuburl}</p>
          <p>Live Link :<br /> {project.livelink}</p>
          <p>Display window :<br /> square cards</p>
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


// delete modal 
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
