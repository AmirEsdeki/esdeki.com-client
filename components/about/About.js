import AnimateWhenInScreen from "../../hooks/AnimateWhenInScreen";
import AboutSkills from "./aboutSkills/AboutSkills";
import Image from "next/image";
import aboutPic from "../../public/static/image/about.jpg";

const About = () => {
  return (
    <AnimateWhenInScreen animationIn="fadeInUp" animationOut="fadeOut">
      <div className="about" id="about">
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
                />
              </div>
            </div>
            <div className="col-lg-6">
              <AboutSkills />
            </div>
          </div>
        </div>
      </div>
    </AnimateWhenInScreen>
  );
};

export default About;
