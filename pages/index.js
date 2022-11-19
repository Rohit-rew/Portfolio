// home page
import React, { Suspense } from "react";
import Slider from "../component/homecomponents/slider";
import Displaypinboard from "../component/homecomponents/displaypinboard";
import Textshowcase from "../component/homecomponents/textshowcase";
import Latestprojects from "../component/homecomponents/latestprojects";
import Texttilt from "../component/homecomponents/texttilt";
import Squarecards from "../component/homecomponents/squarecards";
import Footer from "../component/footer";
import Videosection from "../component/homecomponents/videosection";
import Verticalcards from "../component/homecomponents/verticalcards";
import Collage from "../component/homecomponents/collage";
import Hireme from "../component/homecomponents/hireme";
import Testimonials from "../component/homecomponents/testimonials";
import Faq from "../component/homecomponents/faq";

export default function App(props) {
  return (
    <main className="home">
      <Slider />

        <Displaypinboard  />

      <div className="mobile-reverse">
        <Textshowcase />
        <Latestprojects />
      </div>
      <Texttilt />
      <Squarecards />
      <Videosection />
      <Verticalcards />
      <Collage />
      <Testimonials />
      <Faq />
      <Hireme />
      <Footer />
    </main>
  );
}




