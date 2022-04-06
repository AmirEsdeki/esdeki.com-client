import { useEffect, useState } from "react";
import About from "../components/about/About";
import Hero from "../components/Hero/Hero";
import Service from "../components/service/Service";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      var handleLoad = () => {
        setLoading(false);
        window.removeEventListener("load", (e) => handleLoad(e));
      };
      window.addEventListener("load", (e) => handleLoad(e));

      return () => {
        window.removeEventListener("load", (e) => handleLoad(e));
      };
    }
  }, []);

  return (
    <>
      <LoadingScreen show={loading}></LoadingScreen>
      <Hero />
      <About />
      <Service />
    </>
  );
}
