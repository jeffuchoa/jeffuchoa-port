import { Fragment, useEffect } from "react";
import PreLoader from "../src/layout/PreLoader";
import { aTagClick, kura_tm_my_load, wowJsAnimation } from "../src/utilits";
import "../styles/globalstyle.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    kura_tm_my_load();
    wowJsAnimation();
    aTagClick();
  }, []); // <--- ADICIONE ESTES COLCHETES AQUI

  return (
    <Fragment>
    <PreLoader />
    <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
