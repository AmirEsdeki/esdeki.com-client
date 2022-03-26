import "../styles/application.scss";
import Navbar from "./../components/navbar/Navbar";
import Head from "next/head";
import { useEffect } from "react";
import { PageProvider } from "../context/page";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof document !== undefined) {
      let bootstrap = require("bootstrap/dist/js/bootstrap");
      // // find all toasts
      // let toastElList = [].slice.call(document.querySelectorAll(".toast"));
      // let toastList = toastElList.map(function (toastEl) {
      //   return new bootstrap.Toast(toastEl);
      // });

      // // show each toast explicitly
      // toastList.forEach(function (element, index) {
      //   element.show();
      // });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Next and Bootstrap</title>
        <meta charset="utf-8" />
        <meta content="Free Website Template" name="keywords" />
        <link href="img/favicon.ico" rel="icon" />
        <meta
          name="description"
          content="A demo about NextJS and Bootstrap 5"
        />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <PageProvider>
        <Navbar />
        <Component {...pageProps} />
      </PageProvider>
    </>
  );
}

export default MyApp;
