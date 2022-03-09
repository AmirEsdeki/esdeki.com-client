import { useRef, useEffect } from "react";

const SkillBar = ({ skill, strength }) => {
  var progressBarRef = useRef(null);

  var isInViewport = (offset = 0) => {
    if (progressBarRef) return false;
    const top = progressBarRef.getBoundingClientRect().top;
    return top + offset >= 0 && top - offset <= window.innerHeight;
  };

  useEffect(() => {
    if (isInViewport(0)) progressBarRef.current.style.width = strength + "%";
  }, [progressBarRef.getBoundingClientRect().top]);

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
          aria-valuenow={`${strength}`}
          aria-valuemin="0"
          aria-valuemax="100"
          ref={progressBarRef}
        ></div>
      </div>
    </>
  );
};
export default SkillBar;
