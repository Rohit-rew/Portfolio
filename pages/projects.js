import Footer from "../component/projectcomponents/footer";
import { getProjects } from "../lib/serversideprops/firebaseinit";

export async function getServerSideProps(){
  const projects = [];
  const snapshot = await getProjects
  const res = snapshot.docs.forEach(doc=>{
    projects.push({...doc.data() , id : doc.id})
  })

  return {
    props :{
      projects
    }
  }
}

export default function Projects({projects}) {
  console.log(projects)

  return (
    <main className="projects">
      <div className="text-static-layer">
        <div className="static-text-area">
          <p className="minitext">BRANDING</p>
          <h1>Your brand image is in safe hands</h1>
          <p>
            As a web developer I convert your dream into reality using the
            latest technologies
          </p>

          <div className="buttoncouple">
            <button className="contact-me">Contact me</button>
            <button className="follow-me">Follow me</button>
          </div>
        </div>
      </div>

      <div className="projects-scroll">
        <div className="project-container">
          <img src="https://ik.imagekit.io/ylyzsq6uc/1_JgKwkG2oS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668224591144" />
          <img src="/banners/2.png" />
          <img src="/banners/3.png" />
          <img src="/banners/4.png" />
          <img src="/banners/5.png" />
          <img src="/banners/6.png" />
        </div>
      </div>

      <div className="text-scroll-layer">


        {/* //make the below line scroll horizontally */}
        <h1>
          WEB DEVELOPMENT CUSTOM WEBSITE INTERACTIVE RESPONSIVE FULLY CUSTOMISED
          UNIQUE ELEGANT GRAPHICS{" "}
        </h1>
      </div>

      <Footer />
    </main>
  );
}
