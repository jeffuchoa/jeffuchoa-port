import { Fragment, useEffect } from "react";
import { aTagClick, jeff_tm_my_load, wowJsAnimation } from "../src/utilits";
import "../styles/globalstyle.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    jeff_tm_my_load();
    wowJsAnimation();
    aTagClick();
  }, []); // <--- ADICIONE ESTES COLCHETES AQUI

  return (
    <Fragment>
    <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
