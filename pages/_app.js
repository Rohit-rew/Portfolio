import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core"
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = 'false'

import Header from "../component/header";
import Hamburger from "../component/hamburger";
import { Context } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Context>
        <Header />
        <Hamburger />
        <Component {...pageProps} />
      </Context>
    </>
  );
}

export default MyApp;
