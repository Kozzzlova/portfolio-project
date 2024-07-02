import React from 'react';
import styled from 'styled-components';

type SkillPropsType = {
   title: string;
   description: string;
   order: number;
};

export const Skill = (props: SkillPropsType) => {
   return (
      <StyledSkill>
         <SkillOrder>0{props.order}.</SkillOrder>
         <SkillText>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillDescription>{props.description}</SkillDescription>
         </SkillText>
      </StyledSkill>
   );
};

const StyledSkill = styled.div`
   color: white;
   flex: 1 0 30%;
   display: flex;
   gap: 25px;
`;
const SkillOrder = styled.p`
   padding-top: 17px;
   font-size: 70px;
   font-weight: 100;
   line-height: 1;
   width: 100%;
   max-width: 90px;
`;
const SkillText = styled.p`
   display: flex;
   flex-direction: column;
   gap: 5px;
`;
const SkillTitle = styled.h3`
   font-size: 30px;
   font-weight: 300;
   line-height: 1;
`;
const SkillDescription = styled.div`
   font-size: 18px;
   font-weight: 200;
`;
