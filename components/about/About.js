import { Animated } from "react-animated-css";
import AboutSkills from "./aboutSkills/AboutSkills";
import Image from "next/image";
import { useContext } from "react";
import { PageContext } from "../../context/page";

const About = () => {
  const [state, dispatch] = useContext(PageContext);
  return (
    <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
      <div className="about" id="about">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image
                  src="/static/image/about.jpg"
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
