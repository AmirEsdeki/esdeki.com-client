import { useContext, useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { PageContext } from "../../../context/page";
const HeroBriefInfo = () => {
  const [state, dispatch] = useContext(PageContext);
  return (
    <div className="col-sm-12 col-md-6">
      <div className="hero-content">
        <div className="hero-text">
          <p>I am</p>
          <h1>Amir Esdeki</h1>
          {state.homePageLoaded && state.showedPreloaderSufficiently && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(".Net Developer")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("React.js Developer")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("FullStack Developer ")
                  .start();
              }}
            />
          )}
        </div>
        <div className="hero-btn">
          <a className="btn" href="">
            Get my resume
          </a>
          <a className="btn" href="">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBriefInfo;
