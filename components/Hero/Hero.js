import HeroBriefInfo from "./heroBriefInfo/HeroBriefInfo";
import HeroImage from "./heroImage/HeroImage";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="container-fluid">
        <div className="row align-items-center hero-box">
          <HeroBriefInfo />
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default Hero;
