import Image from "next/image";
import heroPic from "../../../public/static/image/hero.png";
import { Animated } from "react-animated-css";

const HeroImage = () => {
  return (
    <div className="col-sm-12 col-md-6 d-none d-md-block">
      <Animated isVisible={true}>
        <div className="hero-image">
          <Image src={heroPic} alt="Hero Image" />
        </div>
      </Animated>
    </div>
  );
};

export default HeroImage;
