import "../styles/application.scss";
import Navbar from "./../components/navbar/Navbar";
import Head from "next/head";
import { useEffect, useState, useContext } from "react";
// import { useRouter } from "next/router";
import { PageProvider } from "../context/page";

function MyApp({ Component, pageProps }) {
  // const router = useRouter();

  // useEffect(() => {
  //   const routeChangeStartHandler = () => setLoading(true);

  //   const routeChangeEndHandler = () => setLoading(false);

  //   router.events.on("routeChangeStart", routeChangeStartHandler);
  //   router.events.on("routeChangeComplete", routeChangeEndHandler);
  //   router.events.on("routeChangeError", routeChangeEndHandler);
  //   return () => {
  //     router.events.off("routeChangeStart", routeChangeStartHandler);
  //     router.events.off("routeChangeComplete", routeChangeEndHandler);
  //     router.events.off("routeChangeError", routeChangeEndHandler);
  //   };
  // }, [router]);

  useEffect(() => {
    if (typeof document !== undefined) {
      let bootstrap = require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>I am Amir Esdeki - It&apos;s my Personal website</title>
        <meta
          name="description"
          content="Here you can find a lot about me! I post my special tasks, my daily chalenges and my helpful experiences here. Also you can find toturials and useful codes here! Stay tuned!"
        ></meta>
        <meta
          content="stax,Amir Esdeki,Esdeki,Amir,developer,amir esteki,esteki,development,c#,اسدکی,امیر اسدکی,استکی,امیر استکی,استکس,سایت رسمی امیر اسدکی,امیر"
          name="keywords"
        ></meta>
        <link href="static/image/favicon.ico" rel="icon" />
        <meta name="robots" content="index, follow"></meta>
        <meta name="author" content="Amir Esdeki"></meta>
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
