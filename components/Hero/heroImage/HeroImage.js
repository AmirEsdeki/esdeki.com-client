import Image from "next/image";
import heroPic from "../../../public/static/image/hero.png";

const HeroImage = () => {
  return (
    <div className="col-sm-12 col-md-6 d-none d-md-block">
      <div className="hero-image">
        <Image src={heroPic} alt="Hero Image" />
      </div>
    </div>
  );
};

export default HeroImage;
