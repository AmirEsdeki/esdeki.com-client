import { useContext, useCallback, useState } from "react";
import { Animated } from "react-animated-css";
import AboutSkills from "./aboutSkills/AboutSkills";
import Image from "next/image";
import { PageContext } from "../../context/page";
import aboutPic from "../../public/static/image/about.jpg";

const About = () => {
  const [state, dispatch] = useContext(PageContext);
  const [animate, setAnimate] = useState(false);
  const measuredRef = useCallback(
    (node) => {
      if (node !== null && typeof window !== "undefined") {
        const top = node.getBoundingClientRect().top;
        var isInViewport = top >= 0 && top <= window.innerHeight;
        if (
          isInViewport &&
          state.homePageLoaded &&
          state.showedPreloaderSufficiently
        ) {
          setAnimate(true);
        }
      }
    },
    [state.y]
  );

  return (
    <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={animate}>
      <div className="about" id="about" ref={measuredRef}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image
                  src={aboutPic}
                  alt="Image"
                  width="30%"
                  height="40%"
                  layout="responsive"
                  onLoad={() => {
                    dispatch({
                      type: "set_loaded_images",
                      loadedImages: state.loadedImages + 1,
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <AboutSkills />
            </div>
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default About;
