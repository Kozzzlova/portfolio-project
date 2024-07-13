import React from 'react';
import { S } from '../Skills_styles';

type SkillPropsType = {
   title: string;
   description: string;
   order?: number;
};

export const Skill = (props: SkillPropsType) => {
   return (
      <S.Skill>
         <S.SkillTitle>{props.title}</S.SkillTitle>
         <S.SkillDescription>{props.description}</S.SkillDescription>
      </S.Skill>
   );
};
