import { SkillProps } from "./index.types";

const Skills = ({ skills }: SkillProps) => {
  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
