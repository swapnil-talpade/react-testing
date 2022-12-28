import { useState } from "react";
import { SkillProps } from "./index.types";

const Skills = ({ skills }: SkillProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
