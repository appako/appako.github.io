import { FC } from 'react';
import { Level, LevelValue } from './level';

export type Skill = { name: string; level: LevelValue };
export type SkillsProps = { skills: Skill[] };

const renderSkill = (skill: Skill) => (
  <li key={skill.name} className="flex-col space-y-2">
    <div>
      <span className="flex-1">{skill.name}</span>
    </div>
    <Level value={skill.level} />
  </li>
);

export const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="mb-6 w-full">
      <h2 className="text-base font-semibold mb-2">Skills</h2>
      <ul className="text-xs space-y-3">{skills.map(renderSkill)}</ul>
    </div>
  );
};
