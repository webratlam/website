import "@/styles/globals.css";
import "../../public/assets/sass/style.sass";
import type { AppProps } from "next/app";
import { Fragment, useEffect, useState } from "react";
import Preloader from "@/layout/Preloader";
import WebHead from "@/layout/WebHead";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

export default function App({ Component, pageProps }: any) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      {loading && <Preloader />}
      <WebHead />
      <Component {...pageProps} />
    </Fragment>
  );
}
