import React from 'react';
import styled from 'styled-components';

type SkillPropsType = {
   title: string;
   description: string;
};

export const Skill = (props: SkillPropsType) => {
   return (
      <StyledSkill>
         <SkillOrder>01.</SkillOrder>
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
   gap: 35px;
`;
const SkillOrder = styled.p`
   padding-top: 17px;
   font-size: 70px;
   font-weight: 100;
   line-height: 71.75px;
`;
const SkillText = styled.p`
   display: flex;
   flex-direction: column;
   gap: 5px;
`;
const SkillTitle = styled.h3`
   font-size: 30px;
   font-weight: 300;
   line-height: 30.75px;
`;
const SkillDescription = styled.div`
   font-size: 18px;
   font-weight: 200;
   line-height: 22.14px;
`;
