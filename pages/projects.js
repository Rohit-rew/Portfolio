import Footer from "../component/projectcomponents/footer";

export default function Projects() {
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
          <img src="/banners/1.png" />
          <img src="/banners/2.png" />
          <img src="/banners/3.png" />
          <img src="/banners/4.png" />
          <img src="/banners/5.png" />
          <img src="/banners/6.png" />
        </div>
      </div>

      <div className="text-scroll-layer">
        <h1>
          WEB DEVELOPMENT CUSTOM WEBSITE INTERACTIVE RESPONSIVE FULLY CUSTOMISED
          UNIQUE ELEGANT GRAPHICS{" "}
        </h1>
      </div>

      <Footer />
    </main>
  );
}
