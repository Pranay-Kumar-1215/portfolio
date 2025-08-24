import {FC, memo, PropsWithChildren} from 'react';
import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-xl font-bold text-orange-600">{name}</span>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </ul>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name} = skill;
  return (
    <li className="text-sm font-medium">
      {name}
    </li>
  );
});

Skill.displayName = 'Skill';