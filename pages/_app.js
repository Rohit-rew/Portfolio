import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = "false";

import Header from "../component/header";
import Hamburger from "../component/hamburger";
import { Context } from "../lib/contextapi/mobile_ham_toggler";
import ProjectFilterContext from "../lib/contextapi/projectfilter";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Context>
          <ProjectFilterContext>
            <Header />
            <Hamburger />
          <Component {...pageProps} />
          </ProjectFilterContext>
        </Context>
    </>
  );
}

export default MyApp;
