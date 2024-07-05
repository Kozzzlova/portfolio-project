import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../../styles/Theme';

type SkillPropsType = {
   title: string;
   description: string;
   order?: number;
};

export const Skill = (props: SkillPropsType) => {
   return (
      <StyledSkill>
         <SkillTitle>{props.title}</SkillTitle>
         <SkillDescription>{props.description}</SkillDescription>
      </StyledSkill>
   );
};

const StyledSkill = styled.li`
   color: ${Theme.colors.lightMain};
   display: flex;
   flex-direction: column;
   gap: 5px;
   padding-left: 115px;
   position: relative;
   counter-increment: example 1;

   &::after {
      content: '0' counter(example) '.';
      display: inline-block;
      font-size: 70px;
      font-weight: 100;
      line-height: 1;
      position: absolute;
      top: 17px;
      left: 0;
   }
`;

const SkillTitle = styled.h2`
   font-size: 30px;
   font-weight: 300;
   line-height: 1;
`;
const SkillDescription = styled.p`
   font-size: 18px;
   font-weight: 200;
`;

const SkillOrder = styled.p`
   padding-top: 17px;

   width: 100%;
   max-width: 90px;
`;
