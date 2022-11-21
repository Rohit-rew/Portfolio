import Footer from "../component/projectcomponents/footer";
import { getProjects } from "../lib/serversideprops/firebaseinit";
import ProjectCard from "../component/projectcomponents/projectCard";
import { useScroll } from "framer-motion";
import React from "react";

import { ProjectContext } from "../lib/contextapi/projectfilter";

export async function getServerSideProps() {
  const projects = [];
  const snapshot = await getProjects;
  const res = snapshot.docs.forEach((doc) => {
    projects.push({ ...doc.data(), id: doc.id });
  });

  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }) {
  const { scrollY } = useScroll();
  const [scroll, setScroll] = React.useState(0);

  React.useState(() => {
    scrollY.onChange((val) => {
      setScroll(val);
    });
  }, [scrollY]);

  const projectCard = projects.map((project, i) => {
    return <ProjectCard key={i} project={project} />;
  });

  const { filter } = React.useContext(ProjectContext);
  const data = projects.filter((project, i) => {
    if (filter == "all") return project;
    else {
      return project.technology[0].toLowerCase() == filter;
    }
  });

  return (
    <main className="projects">
      <div className="text-static-layer">
        <div className="static-text-area">
          <p className="minitext">BRANDING</p>
          <h1>Your brand image is in safe hands</h1>
          <p>
            As a web developer I convert your dream into reality using the
            latest technologies.
          </p>

          <div className="buttoncouple">
            <button className="contact-me">Contact me</button>
            <button className="follow-me">Follow me</button>
          </div>
        </div>
      </div>

      <div className="projects-scroll">
        <div className="project-container">{projectCard}</div>
      </div>

      <div className="text-scroll-layer">
        <h1 style={{ translate: `${scroll / 2.5}px` }}>
          WEB DEVELOPMENT UNIQUE ELEGANT CUSTOM WEBSITE INTERACTIVE RESPONSIVE
          FULLY CODED CUSTOMISED UNIQUE ELEGANT GRAPHICS{" "}
        </h1>
      </div>

      <Footer />
    </main>
  );
}
