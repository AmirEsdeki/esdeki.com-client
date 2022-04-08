import { useCallback, useContext, useState } from "react";
import { PageContext } from "../../../context/page";

const SkillBar = ({ skill, strength }) => {
  const [state, dispatch] = useContext(PageContext);
  const [hasAnimated, setHasAnimated] = useState(false);
  const measuredRef = useCallback(
    (node) => {
      if (node !== null && typeof window !== "undefined" && !hasAnimated) {
        const top = node.getBoundingClientRect().top;
        var isInViewport = top >= 0 && top <= window.innerHeight;
        if (isInViewport) {
          node.style.width = strength + "%";
          setHasAnimated(true);
        } else {
          node.style.width = "0%";
        }
      }
    },
    [state.y]
  );

  return (
    <>
      <div className="skill-name">
        <p>{skill}</p>
        <p>{strength}%</p>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          ref={measuredRef}
        ></div>
      </div>
    </>
  );
};
export default SkillBar;
