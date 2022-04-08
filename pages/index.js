import { useEffect, useState, useContext } from "react";
import About from "../components/about/About";
import Hero from "../components/Hero/Hero";
import Service from "../components/service/Service";
import { PageContext } from "../context/page";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";

export default function Home() {
  const [state, dispatch] = useContext(PageContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      var handleLoad = () => {
        dispatch({ type: "set_homepage_loaded", homePageLoaded: true });
        window.removeEventListener("load", (e) => handleLoad(e));
      };

      window.addEventListener("load", (e) => handleLoad(e));

      setTimeout(() => {
        dispatch({
          type: "showed_preloader_sufficiently",
          showedPreloaderSufficiently: true,
        });
      }, 2400);

      return () => {};
    }
  }, []);

  return (
    <>
      <LoadingScreen
        show={!(state.showedPreloaderSufficiently && state.homePageLoaded)}
      ></LoadingScreen>
      <Hero />
      <About />
      <Service />
    </>
  );
}
