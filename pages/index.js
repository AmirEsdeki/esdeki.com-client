import About from "../components/about/About";
import Hero from "../components/Hero/Hero";
import Service from "../components/service/Service";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";
import { useEffect, useState, useContext } from "react";

import { PageContext } from "../context/page";

export default function Home() {
  const [state, dispatch] = useContext(PageContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("loaded-images", state.loadedImages);
    if (state.loadedImages > 2) {
      setLoading(false);
    }
  }, [state.loadedImages]);

  return (
    <>
      <LoadingScreen show={loading}></LoadingScreen>
      <Hero />
      <About />
      <Service />
    </>
  );
}
