import { useState } from "react";
import SkillBar from "./SkillBar";
const AboutSkills = () => {
  var [experience, setExperience] = useState(3);
  var [skills, setSkills] = useState([
    { name: ".Net technologies", strength: 90 },
    { name: "T-SQL", strength: 90 },
    { name: "OOP - SOLID", strength: 85 },
    { name: "React", strength: 70 },
    { name: "HTML - CSS", strength: 70 },
    { name: "Software Design - Design Patterns", strength: 50 },
  ]);

  return (
    <div className="about-content">
      <div className="section-header text-left">
        <p>Learn About Me</p>
        <h3>+{experience} Years Experience in web development</h3>
      </div>
      <div className="about-text">
        <p>
          I am a FullStack Developer and I have worked for more than{" "}
          {experience} years, through all these years I have gained exprience in
          couple of fields which I have mentioned some of them below, I also
          mentioned my strength in comparison with an ideal Mid-Level developer.
        </p>
      </div>
      <div className="skills">
        {skills.map((skill) => (
          <SkillBar skill={skill.name} strength={skill.strength}></SkillBar>
        ))}
      </div>
      <a className="btn" href="">
        Learn More
      </a>
    </div>
  );
};

export default AboutSkills;
