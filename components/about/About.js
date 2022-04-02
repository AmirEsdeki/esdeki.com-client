import { Animated } from "react-animated-css";
import AboutSkills from "./aboutSkills/AboutSkills";

const About = () => {
  return (
    <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
      <div className="about" id="about">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/static/image/about.jpg" alt="Image" />
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
