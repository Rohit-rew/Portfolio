import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = "false";
import { SessionProvider } from "next-auth/react";

import Header from "../component/header";
import Hamburger from "../component/hamburger";
import { Context } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Context>
          <Header />
          <Hamburger />
          <Component {...pageProps} />
        </Context>
      </SessionProvider>
    </>
  );
}

export default MyApp;
