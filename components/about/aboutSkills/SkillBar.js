const SkillBar = ({ skill, strength }) => {
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
        ></div>
      </div>
    </>
  );
};
export default SkillBar;
