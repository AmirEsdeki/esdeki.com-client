import Image from "next/image";
import heroPic from "../../../public/static/image/hero.png";
import { Animated } from "react-animated-css";
import { useContext } from "react";
import { PageContext } from "../../../context/page";

const HeroImage = () => {
  const [state, dispatch] = useContext(PageContext);
  return (
    <div className="col-sm-12 col-md-6 d-none d-md-block">
      <Animated isVisible={true}>
        <div className="hero-image">
          <Image
            src={heroPic}
            alt="Hero Image"
            onLoad={() => {
              dispatch({
                type: "set_loaded_images",
                loadedImages: state.loadedImages + 1,
              });
            }}
          />
        </div>
      </Animated>
    </div>
  );
};

export default HeroImage;
