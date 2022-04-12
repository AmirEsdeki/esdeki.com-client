import { PageContext } from "../context/page";
import React, { useContext, useState, useCallback } from "react";
import { Animated } from "react-animated-css";

const AnimateWhenInScreen = ({ children, animationIn, animationOut }) => {
  const [state] = useContext(PageContext);
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
    <Animated
      animationIn={animationIn}
      animationOut={animationOut}
      isVisible={animate}
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ref: measuredRef,
        })
      )}
    </Animated>
  );
};

export default AnimateWhenInScreen;
